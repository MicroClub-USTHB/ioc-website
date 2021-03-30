import React from 'react';
import { Route } from 'react-router-dom';
import DayChallenge from '../../Sections/DayChallenge/DayChallenge';
import DaySelection from '../../Sections/DaySelection/DaySelection';
import DayStory from '../../Sections/DayStory/DayStory';

// Style
import workStyle from './Workspace.module.scss';

const Workspace = () => {
    return (
        <div className={workStyle.workspace}>
            <DaySelection />
            
            <Route path="/workspace/1" render={() => (
                <DayStory
                    dayNumber={1}
                    day="Day 1"
                    title="What Happened?"
                    story={`Axios Woke up and realised that something went wrong , no people no action only few animals ( chickens , horses , dogs , birds , monkeys.. )  it was an empty calm city . For some unknown reason he found himself  lost , looking for answers ( no electricity , no network )\n\nHe opens his door , boom he finds a piece of paper , written on it\n\n“Wonder never knows , some changes hit the city and you need to follow my hits if you want to survive”\n\nyou gonna need some basic supplies that you will find in this building.\n\nThis folowing list of numbers represent the rooms that are not safe.`}
                />)}
            />

            <Route path="/workspace/2" render={() => (
                <DayStory
                    dayNumber={2}
                    day="Day 2"
                    title="Find The Mole"
                    story={`After unlocking the phone a message popped  “contact this number XXXXX-XXXXX respecting the terms and conditions.”`}
                />)}
            />

            <Route path="/workspace/3" render={() => (
                <DayStory
                    dayNumber={3}
                    day="Day 3"
                    title="Secret Message"
                    story={`After realizing that people has disappeared, and that he’s alone, he decides to get out of his house, in order to go to his town to learn more.\n\nThe moment he get out of the woods , he start seeing some posters on buildings walls that has this:  A BUNCH OF NUMBERS ON A PAPER WITH SMALL INSTRUCTIONS\n\n\n------------------------\n|  /SENTENCE. |\n|  CAPS ONLY   |\n------------------------\n`}
                />)}
            />

            <Route path="/workspace/4" render={() => (
                <DayStory
                    dayNumber={4}
                    day="Day 4"
                    title="Geohash Coordinates"
                    story={`M.ioC , managed to leave a trace of his existence in a secretive  way so far  , so he must’ve left something that would lead Axios  to them.\n\nAxios kept looking for hints that might  provide  him with enough information to join the other survivors . After a short amount of time he noticed that some set of numbers were written on the walls beside each set. There were some instructions :rotate ,sum ,multiply....\n\nBy applying some manipulations based on an interpretation for the given signs ,   He soon understood that those were gps coordinates of where the survivors escaped. `}
                />)}
            />

            <Route path="/workspace/5" render={() => (
                <DayStory
                    dayNumber={5}
                    day="Day 5"
                    title="Protection Layers"
                    story={`Now that Axios found out that he is being tracked down by a monkey looking like creatures  that appeared after a catastrophic experiment fail in Willy Wonka's famous chocolate Factory , He hits the road  to join the other survivors ,which is certainly not safe:\n\nneeds to protect himself  because there is a  chance of him  becoming one of the  creatures if he comes in physical contact with them  so he figured that he has to wear as many  protective suits as possible.\n\nto the different sizes of the human body , he needs to evaluate the available sizes and wear them  from smallest to largest(layers).`}
                />)}
            />

            <Route path="/workspace/6" render={() => (
                <DayStory
                    dayNumber={6}
                    day="Day 6"
                    title="Hide Under The Tree"
                    story={`Axios now is so close to the safe city, it’s surrounded by a forest, there are drones around the city that kills everything moves, he realized that he can’t pass the forest during the day, means he has to sleep at the forest, but the drones may kill him, so he is thinking how to find a tree to sleep under it so the drones can’t spot him from the top.`}
                />)}
            />

            <Route path="/workspace/7" render={() => (
                <DayStory
                    dayNumber={7}
                    day="Day 7"
                    title="Who Are You?"
                    story={`It’s day 07, our hero has entered the city, but everyone is looking horrified of course they are, it's just a matter of time and the enemy can destroy the door and destroy the city.\n\nThe hero has told everyone to calm down, he is thinking of building an AI model using computer vision to detect apes, so it can kill them before they get closer to the city.`}
                />)}
            />

            <Route path="/workspace/1" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        <strong>What to do?</strong><br />
                        Given the txt format find the SUM of rooms he can enter. <br />
                        Note that doors might start from a number different then one or zero. <br/>
                        <strong>Input:</strong><br />
                        682 <br />
                        696 <br />
                        884 <br />
                        985 <br />
                        947 <br />
                        903 <br />
                        122 <br />
                        408 <br />
                        689 <br />
                        101 <br />
                        710 <br />
                        217 <br />
                        213 <br />
                        563 <br />
                        486 <br />
                        1 <br />
                        827 <br />
                        849 <br />
                        677 <br />
                        154 <br />
                        573 <br />
                    </div>
                </DayChallenge>
            )} />

            <Route path="/workspace/2" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        Given the following files in which we intercepted all coded messages sent in the last 2 months, can you find how many moles are actually hiding among the rebellion ? <br />
                        <strong><i>example:</i></strong><br />
                        110010001010001111011010011010110101100101011010011010101101101010111001000<br />
                        answer → this one is a mole he’s creating copies of our messages <br />
                        reason → sent it to himself<br />
                        110010001010001101101010110110101011011010011010110101100101011010111001000 <br />
                        → give them txt file with the following format: <br />
                        <br />
                        01-22-2310:110010001010001111011010011010110101100101011010011010101101101010111001000<br />
                        01-25-2310:100010001010001111011010011010110101100101011010011010101101101010111001000<br />
                        01-02-2310:000010001010001111011010011010110101100101011010011010101101101010111001011<br />
                        01-25-2310:101010001010001111011010011010110101100101011010011010101101101010101001001<br />
                        <br />
                        format is date:message.<br />
                        → here we have one mole
                    </div>
                </DayChallenge>
            )} />

            <Route path="/workspace/3" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        Given the following files that has 3 lines of number series , try to get the 3 sentences (1 sentence line)<br />
                        Knowing that each sentence starts with a “/” and ends with “.” And the letters are in CAPS.<br />
                        <strong><i>example:</i></strong><br />
                        Input → three lines of succession of numbers<br />
                    </div>
                </DayChallenge>
            )} />

            <Route path="/workspace/4" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        This challenge is missing!
                    </div>
                </DayChallenge>
            )} />

            <Route path="/workspace/5" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        Given the following files in which we gathered all the sizes found in stores, can you find the maximum number of layers he can wear? note that  two suits of the same size  (width/height) cannot contain each other. <br />
                        <strong><i>example:</i></strong><br />
                                     <br />
                        Input (sizes[height,width]): [[5,4],[6,4],[6,7],[2,3]] <br />
                        answer → (number of layers he can wear ) 3  <br />
                        reason → The maximum number of layers  you can Russian doll is 3 ([2,3] → [5,4] → [6,7]) <br />
                    </div>
                </DayChallenge>
            )} />

            <Route path="/workspace/6" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        given a binary tree as an input, you have to find the top view of the tree <br />
                        example (the values that are visible from the top. <br />
                        input : list of numbers (separated by white-spaces) <br />
                         <br />
                        <strong><i>example:</i></strong><br />
                         <br />
                        input : 5 2 4 8 10 13 3 9 11 1 <br />
                        output : 1 2 5 8 10 13  <br />
                    </div>
                </DayChallenge>
            )} />

             <Route path="/workspace/7" render={() => (
                <DayChallenge>
                    <div className={workStyle.content}>
                        build the architecture of the model to detect apes.<br />
                        <br />
                        <strong><i>Testing the architecture</i></strong><br />
                        We put 10 different pictures that contain apes and different beings.<br />
                        <br />
                        The output has to give a number of apes.<br />
                    </div>
                </DayChallenge>
            )} />
             
        </div>
    );
}

export default Workspace;
