import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// helper functions
const saveToLocalStorage = (uid) => {
    localStorage.setItem('uid', uid);
}

const makeLeaderboardEntry = ({uid, fullName, score}) => {
    firebase.firestore().collection('leaderboard').doc(uid).set({
        fullName,
        uid,
        score
    });
}

const updateLeaderboard = ({ challengeCompletion, challenges, uid }) => {
    console.log('here props: ', challengeCompletion, challenges, uid);
    const scoresArray = challenges.map(challenge => {
        if (challengeCompletion[`day${challenge.day}`]) {
            return challenge.score;
        }
        return 0;
    })
    const newScore = scoresArray.reduce((a,b) => (a + b), 0);
    firebase.firestore().collection('leaderboard').doc(uid).update({
        score: newScore,
    })
}

// Answer actions
const _updateChallengeCompletion = createAsyncThunk(
    'workspace/_updateChallengeCompletion',
    async (day, thunkAPI) => {
        try {
            let uid = thunkAPI.getState().workspace.user.uid;
            let challenges = thunkAPI.getState().workspace.challenges;
            let userDB = thunkAPI.getState().workspace.user.userDB;
            let ref = `challengeCompletion.day${day}`;
            await firebase.firestore().collection('users').doc(uid).update({
                [ref]: true,
            })
            updateLeaderboard({
                challengeCompletion: {
                    ...userDB.challengeCompletion,
                    [`day${day}`]: true,
                },
                challenges,
                uid,
            })
        } catch(error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)

export const answerSubmission = createAsyncThunk(
    'workspace/answerSubmission',
    async ({answerHash, dayNumber}, thunkAPI) => {
        try {
            const dayChallenge = await firebase.firestore().collection('challenges').where('day', '==', dayNumber).get();
            const challenge = dayChallenge.docs[0].data();
            if (challenge.solutionHash === answerHash) {
                thunkAPI.dispatch(_updateChallengeCompletion(dayNumber));
                return dayNumber;
            }
            return false;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)
// Auth Actions
const _getUserData = createAsyncThunk(
    'workspace/_getUserData',
    async (uid, thunkAPI) => {
        try {
            const collection = await firebase.firestore().collection('users').where('uid', '==', uid).get();
            const userDB = collection.docs[0].data();
            thunkAPI.dispatch(_getChallenges());
            return userDB;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
    )

const _makeUserData = createAsyncThunk(
    'workspace/_makeUserData',
    async (values, thunkAPI) => {
        try {
            let userData = {
                challengeCompletion: {
                    day1: false,
                    day2: false,
                    day3: false,
                    day4: false,
                    day5: false,
                    day6: false,
                    day7: false,
                },
                fullName: values.fullName,
                email: values.email,
                uid: values.uid,
            }
            await firebase.firestore().collection('users').doc(values.uid).set(userData);
            thunkAPI.dispatch(_getChallenges());
            makeLeaderboardEntry({
                uid: values.uid,
                fullName: values.fullName,
                score: 0
            })
            saveToLocalStorage(values.uid);
            return userData;
        } catch (error) {
            await firebase.auth().currentUser.delete();
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const _getChallenges = createAsyncThunk(
        'workspace/_getChallenges',
        async (_, thunkAPI) => {
            try {
                const challenges = await firebase.firestore().collection('challenges').where('announced', '==', true).get();
                const challengeList = challenges.docs.map(challenge => {
                    return challenge.data();
                })
                return challengeList;
            } catch(error) {
                return thunkAPI.rejectWithValue(error);
            }
        }
    )

export const sessionStart = createAsyncThunk(
    'workspace/sessionStart',
    async (uid, thunkAPI) => {
        try {
            thunkAPI.dispatch(_getUserData(uid));
            return uid;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    }
)

export const emailSignIn = createAsyncThunk(
    'workspace/emailSignIn',
    async ({email, password}, thunkAPI) => {
        try {
            const userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password);
            thunkAPI.dispatch(_getUserData(userCredentials.user.uid));
            saveToLocalStorage(userCredentials.user.uid);
            return userCredentials.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }

    }
)


export const emailSignUp = createAsyncThunk(
    'workspace/emailSignUp',
    async (values, thunkAPI) => {
        try {
            const userCredentials = await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
            let userValues = {
                uid: userCredentials.user.uid,
                email: values.email,
                fullName: values.fullName
            }
            thunkAPI.dispatch(_makeUserData(userValues));
            return userCredentials.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const signOut = createAsyncThunk(
    'workspace/signOut',
    async (values, thunkAPI) => {
        try {
            await firebase.auth().signOut();
            localStorage.removeItem('uid');
            return;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        chosenDay: 0,
        minimized: false,
        loadingUser: false,
        authError: null,
        user: null,
        challenges: null,
        challengesState: 'loading',
        answerSubmissionState: 'initial',
        leaderboard: null,
        isMobile: false
    },
    reducers: {
        chooseDay: ( state, action ) => { state.chosenDay = action.payload },
        minimize: (state, action) => { state.minimized =  action.payload},
        setLeaderboard: ( state, action ) => { state.leaderboard = action.payload},
        setIsMobile: (state, action) => {state.isMobile = action.payload},
    },
    extraReducers: {
        [emailSignIn.fulfilled]: (state, action) => {
            state.authError = null;
            state.user = {
                uid: action.payload.uid,
            };
        },
        [emailSignIn.pending]: (state) => {
            state.loadingUser = true;
        },
        [emailSignIn.rejected]: (state, action) => {
            state.loadingUser = false;
            state.authError = action.payload;
        },
        [emailSignUp.fulfilled]: (state, action) => {
            state.authError = null;
            state.user = {
                uid: action.payload.uid,
            };
        },
        [emailSignUp.pending]: (state) => {
            state.loadingUser = true;
            state.authError = null;
        },
        [emailSignUp.rejected]: (state, action) => {
            state.authError = action.payload.message;
            state.loadingUser = false;
        },
        [signOut.fulfilled]: (state) => {
            state.loadingUser = false;
            state.authError = null;
            state.user = null;
        },
        [signOut.pending]: (state) => {
            state.loadingUser = true;
        },
        [signOut.rejected]: (state) => {
            state.loadingUser = false;
            state.authError = true;
        },
        [_getUserData.fulfilled]: (state, action) => {
            state.loadingUser = false;
            state.user = {
                ...state.user,
                userDB: action.payload,
            }
        },
        [_getUserData.pending]: (state) => {
            state.loadingUser = true;
        },
        [_getUserData.rejected]: (state, action) => {
            state.authError = action.payload.message;
            state.loadingUser = false;
            state.user = null;
        },
        [_makeUserData.fulfilled]: (state, action) => {
            state.loadingUser = false;
            state.authError = null;
            state.user = {
                ...state.user,
                userDB: {...action.payload}
            };
        },
        [_makeUserData.pending]: (state) => {
            state.loadingUser = true;
        },
        [_makeUserData.rejected]: (state, action) => {
            state.loadingUser = false;
            state.authError = action.payload.message;
            state.user = null;
        },
        [_getChallenges.fulfilled]: (state, action) => {
            state.challenges = action.payload;
            state.challengesState = 'loaded';
        },
        [_getChallenges.pending]: (state) => {
            state.challengesState = 'loading';
        },
        [_getChallenges.rejected]: (state) => {
            state.challengesState = 'failed';
        },
        [sessionStart.fulfilled]: (state, action) => {
            state.loadingUser = false;
            state.user = {
                uid: action.payload
            }
        },
        [sessionStart.pending]: (state, action) => {
            state.loadingUser = true;
        },
        [sessionStart.rejected]: (state) => {
            state.user = null;
        },
        [answerSubmission.fulfilled]: (state, action) => {
            state.answerSubmissionState = 'submitted';
            state.user.userDB.challengeCompletion[`day${action.payload}`] = true;
        },
        [answerSubmission.pending]: (state) => {
            state.answerSubmissionState = 'submitting';
        },
        [answerSubmission.rejected]: (state) => {
            state.answerSubmissionState = 'failed';
        }
    }
})

export const { chooseDay, minimize, setLeaderboard, setIsMobile } = workspaceSlice.actions;

export default workspaceSlice.reducer;