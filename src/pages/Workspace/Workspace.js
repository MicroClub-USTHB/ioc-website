import React from 'react';
import { Route } from 'react-router-dom';
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
            
            
        </div>
    );
}

export default Workspace;
