import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Row, Col } from 'reactstrap';
import { isMobile, isTablet } from 'react-device-detect';
import Subscribe from '../../components/Subscribe';
import CAT1 from '../../assets/images/CAT-1.jpg';
import CAT2 from '../../assets/images/CAT-2.jpg';
import CAT3 from '../../assets/images/CAT-3.png';
import CAT4 from '../../assets/images/CAT-4.jpeg';
import CAT5 from '../../assets/images/CAT-5.jpg';
import CAT6 from '../../assets/images/CAT-6.jpg';
import CAT7 from '../../assets/images/CAT-7.jpg';
import CAT8 from '../../assets/images/CAT-8.jpg';
import CAT9 from '../../assets/images/CAT-9.jpg';
import CAT10 from '../../assets/images/CAT-10.png';
import CAT11 from '../../assets/images/CAT-11.jpg';
import TAT1 from '../../assets/images/TAT-1.png';
import TAT2 from '../../assets/images/TAT-2.png';
import TAT3F from '../../assets/images/TAT-3(F).png';
import TAT3M from '../../assets/images/TAT-3(M).png';
import TAT4M from '../../assets/images/TAT-4(M).png';
import TAT5 from '../../assets/images/TAT-5.png';
import TAT6 from '../../assets/images/TAT-6.png';
import TAT7 from '../../assets/images/TAT-7.png';
import TAT8 from '../../assets/images/TAT-8.png';
import Rorschach_blot_01 from '../../assets/images/Rorschach_blot_01.jpg';
import Rorschach_blot_02 from '../../assets/images/Rorschach_blot_02.jpg';
import Rorschach_blot_03 from '../../assets/images/Rorschach_blot_03.jpg';
import Rorschach_blot_04 from '../../assets/images/Rorschach_blot_04.jpg';
import Rorschach_blot_05 from '../../assets/images/Rorschach_blot_05.jpg';
import Rorschach_blot_06 from '../../assets/images/Rorschach_blot_06.jpg';
import Rorschach_blot_07 from '../../assets/images/Rorschach_blot_07.jpg';
import Rorschach_blot_08 from '../../assets/images/Rorschach_blot_08.jpg';
import Rorschach_blot_09 from '../../assets/images/Rorschach_blot_09.jpg';
import Rorschach_blot_10 from '../../assets/images/Rorschach_blot_10.jpg';



const webStyle = {paddingTop: '15%', paddingBottom: '40px', margin: 'auto', width: '50%'};
const mobStyle = {paddingTop: '25%', paddingBottom: '40px', margin: 'auto', width: '90%'};

const selected = {
    background: '#005191',
    color: 'white',
    border: 'solid 1px #005191',
};

let total = {
    A: 0,
    B: 0,
    C: 0,
};

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            totalA: 0,
            totalB: 0,
            totalC: 0,
            questions: [
                {
                    question: 'I am able to ahhhchieve the goals I set for myself on a given day.',
                    options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                    selected: '',
                },
                {
                    question: 'I believe that my life is balanced in terms of my work, personal relationships, my goals, interests and hobbies',
                    options: [{value: 'A', option: 'Almost Always'},{value: 'B', option: 'Much of the time'},{value: 'C', option: 'Rarely'}],
                    selected: '',
                },
            ],
            image: {},
            value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount = () => {
    let type = localStorage.getItem('type');
    console.log("type---", type);
    if (type==='emotional') {
        this.state.questions = [
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I believe that my life is balanced in terms of my work, personal relationships, my goals, interests and hobbies',
                options: [{value: 'A', option: 'Almost Always'},{value: 'B', option: 'Much of the time'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'When I get into an argument with my friends or my family and get angry and upset, I usually',
                options: [{value: 'A', option: 'Try and think of the situation from their point of view and try to make amends'},{value: 'B', option: 'Wait until I have cooled off before speaking with them again'},{value: 'C', option: 'Get very angry and upset and hold onto a grudge until they apologize to me.'}],
                selected: '',
            },
            {
                question: 'I am able to move on from my failures',
                options: [{value: 'A', option: 'Quickly'},{value: 'B', option: 'It takes me a while'},{value: 'C', option: 'I don’t really get over it'}],
                selected: '',
            },
            {
                question: 'I prioritise myself; my goals, interests, hobbies, personal relationships, and goals',
                options: [{value: 'A', option: 'Most of the time'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'I enjoy my own company and can spend time on my own without feeling anxious',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I am able to accept myself for who I am, the good and the bad',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            }
        ];
    }
    else if (type==='romantic') {
        this.state.questions = [
            {
                question: 'Does being with your partner introduce you to new experiences?',
                options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'No'}],
                selected: '',
            },
            {
                question: 'Does your partner motivate you to follow your dreams and accomplish your goals?',
                options: [{value: 'A', option: 'Yes he/she always encourages me'},{value: 'B', option: 'Sometimes he/she does'},{value: 'C', option: 'No, not at all'}],
                selected: '',
            },
            {
                question: 'Has your partner introduced you to new perspectives?',
                options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'No'}],
                selected: '',
            },
            {
                question: 'Do you use criticism (attacking your partner’s character, eg. you’re always late, you’re so inconsiderate) when you fight?',
                options: [{value: 'A', option: 'Rarely'},{value: 'B', option: 'Often'},{value: 'C', option: 'Always'}],
                selected: '',
            },
            {
                question: "Do you use contempt (pointing out your partner's insecurities and weaknesses) when you fight?",
                options: [{value: 'A', option: 'Rarely'},{value: 'B', option: 'Often we do point out each other’s mistakes'},{value: 'C', option: 'Always, we are constantly pointing out each other’s insecurities'}],
                selected: '',
            },
            {
                question: 'Do you play the victim when you and your partner are fighting?',
                options: [{value: 'A', option: 'Rarely'},{value: 'B', option: 'Often'},{value: 'C', option: 'Always'}],
                selected: '',
            },
            {
                question: 'Do you shut down and refuse to discuss an issue when you and your partner are fighting',
                options: [{value: 'A', option: 'Rarely'},{value: 'B', option: 'Often'},{value: 'C', option: 'Always'}],
                selected: '',
            }
        ];
    }
    else if (type==='anger') {
        this.state.questions = [
            {
                question: 'On your way home from work you stop at the shopping mall to pick up some dinner. As you walk past a restaurant you catch a glimpse of your partner with another woman/man. They are kissing publicly and very passionately. How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: 'You hear a friend talking ill about you to another friend. How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: 'Your friend persuades you to hire her/his cousin for a moving job. The guy turns out to be pretty bad at the job How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: 'You have agreed to pick up some friends at the train station. You have arranged with your partner to have the car for the day. You are about to leave the house when you realize the car is outside but your husband/wife has gone to work with the keys. How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: 'At a karaoke night with friends, your partner pokes fun at your singing in front of your friends. How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: "You've planted a garden in your backyard and are looking forward to reaping the fruit of your efforts. One day, you catch the neighbour’s dog destroying your plants. How angry does that make you feel?",
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            },
            {
                question: 'The guy behind you at the movies keeps bumping the back of your seat whenever he changes position...and he seems to be getting more restless as the movie progresses. How angry does that make you feel?',
                options: [{value: 'A', option: 'I don’t feel angry at all'},{value: 'B', option: 'I feel a little angry'},{value: 'C', option: 'I feel furious'}],
                selected: '',
            }
        ];
    }
    else if (type==='memory') {
        this.state.questions = [
            {
                question: "Do you have difficulty remembering people's names or phone numbers?",
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'How often do you find yourself trying to remember the location of everyday items (e.g. your keys, wallet, glasses, etc.)?',
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: "How often do you have to replace passwords (numerical or verbal) because you've forgotten the original one?",
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'How often do you find yourself asking questions like, "What was I about to do next?"',
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'How often do you end up double-booking yourself because you forgot you had made previous plans with someone else?',
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: "How often do you have to ask someone to repeat instructions or a story because you can't remember what was said the first time around?",
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'How often do you have difficulty remembering where you parked your car?',
                options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            }
        ];
    }
    else if (type==='mental') {
        this.state.questions = [
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I believe that my life is balanced in terms of my work, personal relationships, my goals, interests and hobbies',
                options: [{value: 'A', option: 'Almost Always'},{value: 'B', option: 'Much of the time'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'When I get into an argument with my friends or my family and get angry and upset, I usually;',
                options: [{value: 'A', option: 'Try and think of the situation from their point of view and try to make amends'},{value: 'B', option: 'Wait until I have cooled off before speaking with them again'},{value: 'C', option: 'Get very angry and upset and hold onto a grudge until they apologize to me.'}],
                selected: '',
            },
            {
                question: 'I am able to move on from my failures',
                options: [{value: 'A', option: 'Quickly'},{value: 'B', option: 'It takes me a while'},{value: 'C', option: 'I don’t really get over it'}],
                selected: '',
            },
            {
                question: 'I prioritise myself; my goals, interests, hobbies, personal relationships, and goals',
                options: [{value: 'A', option: 'Most of the time'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Rarely'}],
                selected: '',
            },
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            },
            {
                question: 'I am able to achieve the goals I set for myself on a given day.',
                options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
                selected: '',
            }
        ];} else if(type === 'MCMI') {
            this.state.questions = [{
            question: 'Lately, my strength seems to be draining out of me, even in the morning.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think highly of rules because they are a good guide to follow',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy doing so many different things that I can’t make up my mind what to do first.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel weak and tired much of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I know I’m a superior person, so I don’t care what people think.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People have never given me enough recognition for the things I’ve done.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If my family puts pressure on me, I’m likely to feel angry and resist doing what they want.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People make fun of me behind my back, talking about the way I act or look.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often criticize people strongly if they annoy me',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'What few things I seem to have I rarely show to the outside world.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a hard time keeping my balance when walking.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I show my feelings easily and quickly.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My drug habits have often got me into a good deal of trouble in the past.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes I can be pretty rough and mean in my relations with my family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Things that are going well today won’t for last very long.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am a very agreeable and submissive person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'As a teenager, I got into lots of trouble because of bad school behaviour.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m afraid to get really close to another person because it may end up with me being ridiculed or shamed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to choose friends who end up mistreating me',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve had sad thoughts much of my life since I was a child.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to flirt with members of the opposite sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m a very erratic person, changing my mind and feelings all the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Drinking alcohol has never caused me any real problems in my work.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I began to feel like a failure some years ago.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel guilty much of the time for no reason that I know.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Other people envy my abilities.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When I have a choice, I prefer to do things alone',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think it’s necessary to place strict controls on the behaviour of members of my family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People usually think of me as a reserved and serious-minded person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Lately, I have begun to feel like smashing things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think I’m a special person who deserves special attention from others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am always looking to make new friends and meet new people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If someone criticized me for making a mistake, I would quickly point out some of that person’s mistakes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Lately, I have gone all to pieces.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often give up doing things because I’m afraid I won’t do them well.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often let my angry feelings out and then feel terribly guilty about it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I very often lose my ability to feel any sensations in parts of my body.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do what I want without worrying about its effect on others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Taking so-called illegal drugs may be unwise, but in the past, I found I needed them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I guess I’m a fearful and inhibited person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve done a number of stupid things on impulse that ended up causing me Great trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I never forgive an insult or forget an embarrassment that someone caused me',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often feel sad or tense right after something good has happened to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel terribly depressed and sad much of the time now.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I always try hard to please others, even when I dislike them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve always had less interest in sex than most people do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I tend to always blame myself when things go wrong.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'A long time ago, I decided it is best to have little to do with people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Since I was a child I have always had to watch out for people who were trying to Cheat me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I strongly resent “big shots” who always think they can do things better than I can.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When things get boring, I like to stir up some excitement.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have an alcohol problem that has made difficulties for me and my family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Punishment never stopped me from doing what I wanted.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There are many times when for no reason, I feel very cheerful and full of Excitement.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In recent weeks I feel worn out for no special reason.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'For some time now I’ve been feeling very guilty because I can’t do things right Anymore.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think I am a very sociable and outgoing person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve become very jumpy in the last few weeks.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I keep very close track of my money so I am prepared if a need comes up.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I just haven’t had the luck in life that others have had.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Ideas keep turning over and over in my mind and they won’t go away.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve become quite discouraged and sad about life in the past year or two.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Many people have been spying into my private life for years.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don’t know why, but I sometimes say cruel things just to make others unhappy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I flew across the Atlantic 30 times last year.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My habit of abusing drugs has caused me to miss work in the past.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have many ideas that are ahead of the times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Lately, I have to think things over and over again for no good reason.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I avoid most social situations because I expect people to criticize or reject me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often think that I don’t deserve the good things that happen to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When I’m alone, I often feel the strong presence of someone nearby who can’t be seen.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel pretty aimless and don’t know where I’m going in life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often allow others to make important decisions for me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can’t seem to sleep, and wake up just as tired as when I went to bed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Lately, I’ve been sweating a great deal and feel very tense.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I keep having strange thoughts that I wish I could get rid of.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a great deal of trouble trying to control an impulse to drink to excessively.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Even when I’m awake, I don’t seem to notice people who are near me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am often cross and grouchy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It is very easy for me to make many friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m ashamed of some of the abuses I suffered from when I was young.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I always make sure that my work is well planned and organized.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My moods seem to change a great deal from one day to the next.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m too unsure of myself to risk trying something new.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don’t blame anyone who takes advantage of someone who allows it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'For some time now I’ve been feeling sad and blue and can’t be trusted.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often get angry with people who do things slowly.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I never sit on the side-lines when I’m at a party',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I watch my family closely so I’ll know who can and who can’t be trusted.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes get confused and feel upset when people are kind to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My use of so-called illegal drugs has led to family arguments.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m alone most of the time and I prefer it that way.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There are members of my family who say I’m selfish and think only of myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People can easily change my ideas, even if I thought my mind was made up.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often make people angry by bossing them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People have said in the past that I become too interested and too excited.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe in the saying, “early to bed and early to rise….”',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My feelings toward important people in my life often swing from loving them to hating them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In social groups,I am almost always very self-conscious and tense.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I guess I’m no different from my parents in becoming somewhat Of an alcoholic.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I guess I don’t take many of my family responsibilities as seriously as I should.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Ever since I was a child, I have been losing touch with the real world.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sneaky people often try to get the credit for things I have done or thought of.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can’t experience pleasure much because I don’t feel I deserve it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have little desire for close friendships.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve had many periods in my life when I was so cheerful and used up so much energy that I fell into a low mood.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have completely lost my appetite and have trouble sleeping most nights.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I worry a great deal about being left alone and having to take care of myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The memory of a very upsetting experience in my past keeps coming back to haunt my thoughts.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I was on the front cover of several magazines last year.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to have lost interest in most things that I used to find pleasurable, such as sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been downhearted and sad much of my life since I was quite young.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve gotten into trouble with the law a couple of times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'A good way to avoid mistakes is to have a routine for doing things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Other people often blame me for things I didn’t do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had to be really rough with some people to keep them in line.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People think I sometimes talk about strange or different things than they do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There have been times when I couldn’t get through the day without the same street drugs.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People are trying to make me believe that I’m crazy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ll do something desperate to prevent a person I love from abandoning me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I go on eating binges a couple of times a week.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to make a mess of good opportunities that come my way.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve always had a hard time stopping myself from feeling blue and unhappy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When I’m alone and away from home, I often begin to feel tense and panicky.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People sometimes get annoyed with me because they say I talk too much or too fast for them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most successful people today have been either lucky or dishonest.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I won’t get involved with people unless I’m sure they’ll like me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel deeply depressed for no reason that I can figure out.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Years later I still have nightmares about an event that was a real threat to my life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don’t have the energy to concentrate on my everyday responsibilities anymore.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Drinking alcohol helps when I’m feeling down.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I hate to think about some of the ways I was abused as a child.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Even in good times, I’ve always been afraid that things start to go badly in my life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes feel crazy-like or unreal when things start to go badly in my life',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Being alone, without the help of someone close to depend on, really frightens me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I know I’ve spent more money than I should buying illegal drugs.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I always wonder the real reason is when someone is acting especially nice to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can tell that people are talking about me when I pass by them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m very good at making up excuses when I get into trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe I’m being plotted against.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel that most people think poorly of me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I frequently feel there’s nothing inside me, like I’m empty and hollow.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes force myself to vomit after eating.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I guess I go out of my way to encourage people to admire the things I say or do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I spend my life worrying over one thing or another.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I always wonder the real reason is when someone is acting especially nice to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There are certain thoughts that keep coming back, again and again in my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Things in life give me pleasure.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel shaky and have difficulty falling asleep because painful memories of others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Looking ahead as each day begins makes me feel terribly depressed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’ve never been able to shake the feeling that I’m worthless to others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a drinking problem that I’ve tried unsuccessfully to end.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone has been trying to control my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have tried to commit suicide.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m willing to starve myself to be even thinner than I am.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don’t understand why some people smile at me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have not seen a car in the last ten years.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get very tensed with people I don’t know well because they may want to harm me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone would have to be pretty exceptional to understand my special abilities.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My current life is still upset by flashbacks of something terrible that happened to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to create situations with others in which I get hurt or feel rejected.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often get lost in my thoughts and forget what’s going on around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People say I’m a thin person, but I feel that my thighs and backside are too big.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There are terrible events from my past that come back repeatedly to haunt my thoughts.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Other than my family, I have no close friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I act quickly much of the time and don’t think things through as I should.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I take great care to keep my life a private matter so no one can take advantage of me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I very often hear things so well that it bothers me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I’m always willing to give in to others in a disagreement because I fear their anger or rejection.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I repeat certain behaviours again and again, sometimes to reduce my anxiety and sometimes to stop\n'+
                      'something bad from happening',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have given serious thought recently to doing away with myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People tell me that I’m a very proper and moral person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I still feel terrified when I think of a traumatic experience I had years ago.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Although I’m afraid to make friendships, I wish I had more than I do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There are people who are supposed to be my friends but would like to do me harm.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        }
        ]

    } else if(type === 'MMPI') {
        this.state.questions = [{
            question: 'I like mechanics magazines.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a good appetite.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I wake up fresh and rested most mornings.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seldom worry about my health.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am easily awakened by noise.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My Father is a good man, or (if your father is dead) my father was a good man.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to read newspaper articles on crime.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My hands and feet are usually warm enough.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My daily life is full of things that keep me interested.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am about as able to work as I ever was.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There seems to be a lump in my throat much of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My teachers have it in for me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy detective or mystery stories.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I work under a great deal of tension.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once in a while I think of things too bad to talk about.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am sure I get a raw deal from life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am troubled by attacks of nausea and vomiting.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am seldom troubled by constipation.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I have very much wanted to leave home.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'No one seems to understand me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I have fits of laughing and crying that I cannot control.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Evil spirits possess me at times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel that it is certainly best to keep my mouth shut when I\'m in trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When people do me wrong , I feel I should pay them back if I can, just for the principle of the thing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am bothered by an upset stomach several times a week.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I feel like swearing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I shrink from facing a crisis or difficulty.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I find it hard to keep my mind on a task or job.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had very peculiar and strange things happen to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes I use laxatives so I won\'t gain weight.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never been in trouble because of my sex behaviour.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have sometimes stolen things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am afraid to go to school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I feel like smashing things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had periods of days, weeks, or months when I couldn\'t take care of things because I couldn\'t "get going."',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My sleep is fitful and disturbed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Much of the time my head seems to hurt all over.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not always tell the truth.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If people had not had it in for me, I would be much more successful.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My judgment is better than it ever was.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once a week or more often I suddenly feel hot all over, for no real reason.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am in just as good physical health as most of my friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I prefer to pass by people I know but I have not seen  for a long time, unless they speak to me first.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am almost never bothered by pains over my heart or in my chest.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most anytime I would rather sit and daydream than do anything else.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am a very sociable person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often had to take orders from someone who did not know as much as I did.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not read every editorial in the newspaper today.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have not lived the right kind life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Parts of my body often feel like they are burning, tingling, or "going to sleep."',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My family doesn\'t like the kind of work I plan to do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes keep on at a thing until others lose their patient with me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I wish I could be as happy as others seem to be.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I hardly ever feel pain in the back of my neck.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think a great many people exaggerate their misfortunes in order to gain the sympathy and help of others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am troubled by discomfort in the pit of my stomach every few days or more often.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My parents do not like my friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am an important person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often wished I were a girl.(Or if you are a girl) I have never been sorry that I am a girl.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My feelings are not easily hurt.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy reading love stories.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most of the time I feel blue.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It would be better If almost all losses were thrown away.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like Poetry.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes tease animals.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think I would like the kind of work a forest ranger does.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am easily downed in an argument.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'These days I find it hard not to give up hope of amounting to something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think school is a waste of time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am certainly lacking in self-confidence.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I usually feel that life is worthwhile.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It takes a lot of argument to convince most people of the truth.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once in a while I put off until tomorrow what I ought to do today.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am liked by most people who know me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not mind being made fun off.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I would like to be a nurse.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think most people will lie to get ahead.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do many things which I regret afterwards (I regret things more and more often than others seem to.)',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have very few quarrels with members of my family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been suspended from school one or more times for bad behaviour.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I have a strong urge to do something harmful or shocking.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to go to the parties and other affairs where there is lots of loud fun.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have met problems so full of possibilities that I have been unable to make up my mind abput them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe women ought to have as much sexual freedom as men.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My hardest battles are with myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I love my father, or (if your father is dead) I loved my father.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have little or no trouble with my muscles twitching or jumping.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don\'t seem to care what happens to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes when I am not feeling well I am irritable.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Much of the time I feel as if I have done something wrong or evil.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am happy most of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I see things or animals or people around me that others do not see.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There seems to be a fullness in my head or noise most of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Some people are so bossy that I feel like doing the opposite of what they request, even though I know they are right.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone has it in for me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never done anything dangerous for the thrill of it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Often I feel as if there is a tight band around my head.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get angry sometimes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy a race or game more when I bet on it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most people are honest chiefly because they are afraid of being caught.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In school I have sometimes been sent to the principal for bad behaviour.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My speech is the same as always (not faster or slower, no slurring or hoarseness).',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My table manners are not quite as good at home as when I am out in company.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Anyone who is able and willing to work hard as a good chance of succeeding.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to be about as capable and smart as most others around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a great deal of stomach trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most people will use what somewhat unfair means to get what they want.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes I make myself throw up after eating so I won\'t gain weight.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I know who is responsible for most of my troubles.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The sight of blood doesn\'t frighten me or make me sick.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Often I can\'t understand why I have been so irritable and grouchy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not worry about catching diseases.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never vomited blood or coughed up blood.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like collecting flowers or growing house plants.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I frequently find it necessary to stand up for what I think is right.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times my thoughts have raced ahead faster than I could speak them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If I could get into a movie without paying and be sure I was not seen, I would probably do it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often wonder what hidden reason another person may have for doing something nice for me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe that my home life is as pleasant as that of most people I know.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe in law enforcement.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Criticism or scolding hurts me terribly.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to cook.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My conduct is mostly controlled by the behaviour of those around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I certainly feel useless at times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I belong to a group of friends who try to stick together through all kinds of troubles.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe in a life hereafter.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I would like to be a soldier.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I feel like picking a fist fight with someone.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often lost out on things because I couldn\'t make up my mind soon enough.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I keep a diary.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It makes me impatient to have people ask my advice or otherwise interrupt me when I am working on something important.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe I am being plotted against.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I would rather win than lose in a game.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most nights I go to sleep without thoughts or ideas bothering me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'During the past few years I have been well most of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe I am being followed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel that I have often been punished.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never had a fit or convulsion.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I cry easily.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am neither gaining nor losing weight.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I cannot understand what I read as well as I used to.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never felt better in my life than I do now.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The top of my head sometimes feels tender.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a problem with alcohol or drugs.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I resent having anyone trick me so cleverly that I have to admit I was fooled.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not tire quickly.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to know some important people because it makes me feel important.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am afraid when I look down from a high place.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It wouldn\'t make me nervous if any members of my family go into trouble with the law.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'What others think of me does not bother me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It makes me uncomfortable to put on a stunt at a party even when others are doing the same sort of things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never had a fainting spell.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I frequently have to fight against showing that I am bashful.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone has been trying to poison me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not have a great fear of snakes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seldom or never have dizzy spells.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My memory seems to be alright.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am worried about sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I find it hard to make talk when I meet new people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have heard periods in which I carried on activities without knowing later what I had been doing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When I get bored I like to stir up some excitement.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am afraid of losing my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am against giving money to beggars.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I frequently notice my hand shakes when I try to do something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can read wrong while without tiring my eyes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel weak all over much of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have very few headaches.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My hands have not become clumsy or awkward?',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to study and read about things that I am working at.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes, when embarrassed. I break out in a sweat which annoys me greatly.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had no difficulty in keeping my balance in walking.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There is something wrong with my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not have spells of high fever or asthma.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had attacks in which I could not control my movements or speech but in which I knew what was going on around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not like anyone I know.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes think about killing myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I wish I were not so shy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy many different kinds of play and recreation.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to flirt.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My family treats me like a child.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My mother is a good woman, (if your mother is dead) my mother was a good woman.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In walking I am very careful to step over sidewalk cracks.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There is very little love and companionship in my family as compared to other homes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I frequently find myself worrying about something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think I would like the work of a building contractor.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a physical problem that keeps me from enjoying activities after school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like science.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It is not hard for me to ask help from my friends even though I cannot return the favour.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I very much like hunting.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My parents often object to the kind of people I go around with.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I gossip a little at times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My hearing is apparently as good as that of most people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Some of my family have habits that bother and annoy me very much.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I feel I wake up my mind with unusually great ease.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I hardly ever notice my heart pounding and I am seldom short of breath.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to talk about sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to visit places where I have never been before.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been inspired by a program based on duty which I have since carefully followed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have at times stood in the way of people who were trying to do something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get mad easily and then get over it soon.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been quite independent & free from family rule.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I brood a great deal.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My relatives are nearly all in sympathy with me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have periods of such great restlessness that I cannot sit long in a chair.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been disappointed in love.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I never work on my looks.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I dream frequently about things that are best kept to myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have few or no pains.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe I am no more nervous than most others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My way of doing things is apt to be misunderstood by others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes without any reason or even when things are going wrong I feel excitedly happy, "on top of the world".',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don\'t blame people for trying to grab everything that they can get in this world.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had blank spells in which my activities were interrupted and I did not know what was going around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My parents do not really love me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can be friendly with people and do things when I consider wrong.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to be with a crowd who plays jokes on one another.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have difficulty in starting to do things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe I am a condemned person.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am a slow learner in school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It does not bother me that I am not better looking.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sweat very easily even on cool days.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am entirely self confident.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times it has been impossible for me to keep from stealing or shoplifting something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It is safer to trust nobody.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once a week or more after I become very excited.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When in a group of people I have trouble thinking of the right things to talk about.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Something exciting will almost always pull me out of it when I am feeling low.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When I leave home I do not worry about whether the door is locked or the windows closed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I believe my sins are unpardonable.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have numbness in one or more places in my skin.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not blame a person for taking advantage of people who leave themselves open to it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My eyesight is as good as it has been for years.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I have been so entertained by the cleverness of some criminals that I have hoped they would get away with it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often felt that strangers were looking at me critically.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Everything tastes the same.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I drink an unusually large amount of water everyday.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most people make friends because friends are likely to be useful to them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not often notice my ears ringing or buzzing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once in a while I feel hate towards members of my family whom I usually love.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If I were a reporter I would very much like to report sporting news.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'No one cares much what happens to you.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Once in a while I laugh at a dirty joke.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have very few fears compared to my friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In a group of people I would not be embarrassed to be called upon to start a discussion or give an opinion about something I know.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am always disgusted with the law when a criminal is freed through the arguments of a smart lawyer.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have used alcohol excessively.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am likely not to speak to people until they speak to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never been in trouble with the law.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My soul sometimes leaves my body.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I wish I were not bothered by thoughts about sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If several people find themselves in trouble, the best thing for them to do is to agree upon a story and stick to it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think that I feel more intensely than most people do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'There never was a time in my life when I like to play with dolls.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Life is a strain for me much of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am so touchy on some subjects that I can\' t talk about them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In school I find it very hard to talk in front of the class.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I love my mother, (or if your mother is dead) I loved my mother.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Even when I am with people I feel lonely much of the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get all the sympathy I should.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I refuse to play some games because I am not good at them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I seem to make friends about as quickly as others do.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'A person who leaves valuable property unprotected is about as much to blame when it is stolen as the one who steals it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I dislike having people around me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I think nearly anyone would tell a lie to keep out of trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am more sensitive than most other people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most people inwardly dislike putting themselves out to help other people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Many of my dreams are about sex.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My parents and family find more fault with me then they should.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am easily embarrassed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am afraid of using a knife or anything very sharp or pointed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never been in love with anyone.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I worry about money.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I almost never dream.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never been paralyzed or had any unusual weakness of any of my muscles.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes my voice leaves me or changes even though I have no cold.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My parents often make me obey even when I think it is unreasonable.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Peculiar orders come to me at times.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I cannot keep my mind on one thing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am apt to pass up something I want to do when others feel that it isn\'t worth doing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel anxiety about something or someone almost all this time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I easily become impatient with people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Most of the time I wish I were dead.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes I become so excited that I find it hard to get to sleep.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have certainly had more than my share of things to worry about.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am sure I am being talked about.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I hear so well it bothers me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I forget right away what people say to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I am all full of energy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Often I cross the street in order not to meet someone else.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often feel as if things are not real.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like parties and socials.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a habit of counting things that are not important such as bulbs on electric signs and so forth.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have no enemies who really wish to harm me..',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I tend to be on my guard with people who are somewhat more friendly than I had expected.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have strange and peculiar thoughts.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get anxious and upset when I have to make a short trip away from home..',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have periods in which I feel unusually cheerful without any special reason.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have been afraid of things or people that I know could not hurt me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I hear strange things when I am alone.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have no dread of going into a room by myself where other people have already and are talking.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The things that some of my family have done have frightened me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes I enjoy hurting people I love.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Whenever possible I avoid being in a crowd.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have more trouble concentrating then others seem to have.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have several times given up during a thing because I thought too little of my ability.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Bad words, often terrible words come into my mind and I cannot get rid of them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Sometimes some unimportant thought will run through my mind and bother me for days.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Almost every day something happens to frighten me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I usually have to stop and think before I act even in small matters.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am inclined to take things hard.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'While in trains, buses, etc. I often talk to strangers.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People should try to understand their dreams and be guided by or take warning from them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People say insulting and vulgar things about me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone has control over my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At parties I am more likely to sit by myself or with just one other person than to join in with the crowd.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People often disappoint me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have sometimes felt that difficulties were piling up so high that I could not overcome them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I love to go to dances.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At periods my mind seems to work more slowly than usual.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I have enjoyed being hurt by someone I loved.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy children.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy gambling for small stakes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If given the chance I could do something that would be of great benefit to the world.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often met people who were supposed to be experts who were no better than I.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It makes me feel like a failure when I hear of the success of someone I know well.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I often think I wish I were a child again.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am never happier than when alone.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If given the chance I would make a good leader of people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People generally demand respect for their own rights than they are willing to allow for others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy social gatherings just to be with people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At one or more times in my life that someone was making me do things by hypnotizing me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I find it hard to set aside a task that I have undertaken even for a short time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I had often found people jealous of my good ideas , just because they had not thought of them first.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I enjoy the excitement of a crowd.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not mind meeting strangers.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Someone has been trying to influence my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can remember playing sick to get out of something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My worries seem to disappear when I get into a crowd of lively friends.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel like giving up quickly when things go wrong.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to let people know where I stand on things.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can express my true feelings only when I drink.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had periods when I felt so full of pep that sleep did not seem necessary for days at a time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I cannot wait for the day when I can leave home for good.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My friends are often in trouble.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have no fear of water.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am not happy with myself the way I am.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I would like to wear expensive clothes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am afraid of being alone in a wide open place.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel uneasy indoors.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The only interesting part of the newspaper is comic strips.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have a reason for feeling jealous of one or more members of my family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have nightmares every few nights.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I can easily make other people afraid of me and sometimes do it for the fun of it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am not easily angered.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have done some bad things in the past that I never tell anybody about.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It makes me nervous when people ask me personal questions.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I do not feel I can plan my own future.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I get angry when my friends or family give me advice on how to live my life.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I very seldom have spells of the blues.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It is all right to get around the law if you don\'t actually break it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I don\'t like hearing other people give their opinions about me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often serious disagreements with people who are close to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am often upset by things that happen in school.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'When things get really bad, I know I can count on my family for help.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have gotten many beatings.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am often said to be hot headed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I wish I could get over worrying about things I have said that may have injured other people\'s feelings.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I feel unable to tell anyone all about myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My plans frequently seem so full of difficulties that I have had to give them up.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The future is too uncertain for a person to make serious plans.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Often even though everything is going fine for me, I feel that I don\'t care about anything.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People have often misunderstood my intentions when I was trying to put them right and be helpful.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have no trouble swallowing.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am usually calm and not easily upset.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'If I was in trouble with several friends who were as guilty as I was I would rather take the whole blame than give them away.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am apt to take disappointments so keenly that I can\'t put them out of my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am often so annoyed when someone tries to get ahead of me in a line of people that I speak to that person about it.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'At times I think I am no good at all.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Often I have not gone to school even when I should have.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'One or more members of my family are nervous.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had times when I had to be rough with people who were rude or annoying.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I worry quite a bit over possible misfortunes.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It bothers me when people say nice things about me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am apt to pass up something I want to do because others feel that I am not going about in a right way.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like excitement.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have never seen a vision.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am often sorry because I am so irritable and grouchy.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'In school my grades in classroom behaviour are quite regularly bad.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am fascinated by fire.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am cornered. I tell that portion of truth which is not likely to hurt me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I deserve severe punishments for my sins.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I readily became one hundred percent sold on a good idea.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I must admit that I have at times been overly worried about something that really didn\'t matter.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have often worked for people who take credit for good work but pass off mistakes on those who work for them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Some of my family have quick tempers.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I prefer work which requires close attention to work which allows me to be careless.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The members of my family and my close relatives get along quite well.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The future seems hopeless to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'People can pretty easily change my mind even when I have made a decision about something.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'It makes me angry that people have hurry me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Several times a week I feel as if something dreadful is about to happen.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to read about science.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I sometimes feel that I am about to go to pieces.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I hate my whole family.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'A large number of people are guilty of bad sexual conduct.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'The person to whom I have been most attached and whom I have most admired is a woman (mother, sister, aunt or other women).',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Some people think it\'s hard to get to know me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to read newspaper editorials.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I spend most of my spare time by myself.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I like to attend lectures on serious subjects.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have had periods in which I lost sleep over worry.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I could be happy living all alone in a cabin in the woods or mountains.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I have one more bad habit that is so strong it is no use fighting against them.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I cannot do anything well.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am very stubborn.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Ghosts or spirits can influence people for good or bed.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'I am not responsible for the bad things that are happening to me.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'My main goals in my life are within reach.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        },{
            question: 'Mental illness is a sign of weakness.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'False'}],
            selected: '',
        }
        ]

    }else if(type === 'TAT') {
      this.state.questions = [
        {
          question: TAT1,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT2,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT3F,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT3M,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT4M,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT5,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT6,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT7,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
        {
          question: TAT8,
          options: [{value: 'A', option: ''}],
          selected: 'A',
        },
      ]
    }else if(type === 'ROR') {
      this.state.questions = [
        {
          question: Rorschach_blot_01,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_02,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_03,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_04,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_05,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_06,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_07,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_08,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_09,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        },
        {
          question: Rorschach_blot_10,
          options: [{value: 'A', option: ''}],
          selected: 'A',

        }
      ]

    }else if(type === 'Mascarenhas Interest Test') {
        this.state.questions = [{
            question: 'To cut up a frog and study its parts.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To operate a machine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make up bills in a store.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To take a course in public speaking.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do painting on glass.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To draw blood and test it.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To repair electrical wiring.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To buy goods and sell them.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write a composition.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design the scenery for a play.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study physiology and hygiene.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To repair a watch.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To learn how to keep accounts.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read and criticize stories sent to a magazine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To draw a comic strip.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make a medical mixture.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be an engineer onboard a ship.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To check financial reports.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be the editor of your school paper.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design the cover page of a book.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work on improving an artificial lung.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study how a car works.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study book-keeping.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write a short dialogue.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do signboard painting.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To give an injection.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in a yard where trains are repaired.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To keep an account of the stores in your school canteen.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write short stories for the magazine section of a newspaper.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To prepare a poster advertising your school concert.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To find out the causes of diseases.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design and build a radio set.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be the manager of a bank.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To take part in debates.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To take a course in sketching.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be a surgeon.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make a telescope.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To determine the cost of furnishing a house.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write a play for the prize Distribution Day of your school.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design a poster advertising a new product.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To discover a new drug.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To build a rail road.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in a bank.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To take part in the elocution competition.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design carpets and rugs.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study about food and diet.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do welding.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read business magazines.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write about the achievements of your school.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To plan an exhibition of classical paintings.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To examine and test the eyes.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To solve mechanical puzzles.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study how a bank is managed.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read poetry.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design a building.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To see an operation being performed.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To clean and repair locks and toy guns.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in the accounts department of a large office.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To  Make a list of interesting people.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do landscape painting.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To listen to people who talk about their diseases.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read about the latest developments in airplanes.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study financial reports.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make speeches.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To collect famous paintings.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To help nurse a sick person.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To construct bridges and dams.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study price lists.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read the biographies of famous people.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make pencil sketches of people.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To look after an animal that has been hurt.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To model ships.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To calculate interest on loans.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be the editor of your school magazine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To sketch a colourful scene.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To help in a sick room.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read \'Popular Mechanics\'.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To prepare a statement of profit and loss.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write short stories for children.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design New Year & Greetings cards.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study the human body and how it works.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study the working of an airplane. ',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study records of banks and commercial firms.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work on a school newspaper.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design costumes for a fancy dress competition.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To teach exercises to crippled children.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be incharge of the proper working of machines.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make entries regarding savings and commercial accounts.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write a news article about your school play.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read descriptions of paintings and sculptures.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To spread information about health and sanitary conditions.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To construct buildings.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be a manager of a large office.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write dialogues.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To make sketches of animals.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To look after a person who is suffering from shock.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To oil and adjust the sewing machine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To manage a student\'s co-operative store.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To describe an interesting experience detail.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design camp equipment.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To analyze foodstuffs for adulteration.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To repair an electric iron.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be the treasurer of a club.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To attend talks and lectures on famous authors.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design flower-pots.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To teach children the rules of health.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To construct laboratory and science equipment.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To prepare detailed records of figures.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read editorials in newspapers.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do carvings in gold and silver.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study plant and animal life.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do mechanical drawings.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To draw business graphs.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write a humorous article for a magazine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design jewelry.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To set a broken bone.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To clean and re-charge storage batteries.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To be a cashier of a student\'s bank.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To start an argument and take an active part in it.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do oil painting.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in the X-Ray Department of a hospital.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To tinker with a bicycle.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To keep an account of the goods bought and sold.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read descriptions of scenes.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design clothes.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work as a chemist.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To invent the new adding machine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To check the accounts of your school bank.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To check the accounts of your school bank.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To design a badge for a sports club.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in a laboratory where medicines are made.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To open up your radio and see its various part.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To buy and sell articles for profit.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To write articles about hobbies.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To paint portraits of famous people.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To sterilize instruments and dressings for an operation.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To cut pieces of wood and join them so that they fit exactly.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To prepare a budget for your home.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study elocution.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To work in a dental laboratory.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To learn how to operate a film projector.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To study arithmetic.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read famous plays and dramas.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To do painting on dresses ad sarees.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To prepare a first -aid kit.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To read about how things are made of plastic.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To run the school canteen on a profitable basis.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To discuss literature with your friends.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        },{
            question: 'To draw illustrations for a magazine.',
            options: [{value: 'A', option: 'L'},{value: 'B', option: 'D'},{value: 'C', option: '?'}],
            selected: '',
        }
        ]

    }else if(type === 'ADHD') {
        this.state.questions = [{
            question: 'How often do you have trouble wrapping up the final details of a project, once the ' +
                'challenging parts have been done?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },
        {
            question: 'How often do you have difficulty getting things in order when you have to do a task that requires organizations?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you have problems remembering appointments or obligations ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'when you have a task that requires a lot of thought, how often do you avoid or delay getting started ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long\n' +
                'time?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you feel overly active and compelled to do things, like you were driven by a motor?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive\n' +
                'work?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you have difficulty finding things at home or at work?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you misplace or have difficulty finding things at home or at work?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often are you distracted by activity or noise around you ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you leave your seat in meetings or other situations in which you are expected to\n' +
                'remain seated?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you feel restless or fidgety?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you have difficulty unwinding and relaxing when you have time to yourself ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'How often do you find yourself talking too much when you are in social situations ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'when you\'re in a conversion, how often do you find yourself finishing the sentences of the\n' +
                'people you are talking to, before they can finish them themselves?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },{
            question: 'how often do you difficulty waiting your turn in situations when turn taking is required ?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        }, {
                question: 'How often do you interrupt others when they are busy ?',
                options: [{value: 'A', option: 'Never'}, {value: 'B', option: 'Rarely'}, {
                    value: 'C',
                    option: 'Sometimes'
                }, {value: 'D', option: 'Often'}, {value: 'E', option: 'Very Often'}],
                selected: '',
            }
        ]
    }else if(type === 'Y-BOCS') {
        this.state.questions = [{
            question: 'TIME OCCUPIED BY OBSESSIVE THOUGHTS.\n how much of your time is occupied by obsessive thoughts?',
            options: [{value: 'A', option: 'None'},
            {value: 'B', option: 'Less than 1hrs/day or occasional occurrence'},
            {value: 'C', option: '1 to 3hrs/day or frequent'},
            {value: 'D', option: 'Greater than 3 and up to 8 hrs/day or very frequent occurrence'},
            {value: 'E', option: 'Greater than 8 hrs/day or nearly constant occurrence'}],
            selected: '',
        },
            {
                question: 'INTERFERENCE DUE TO OBSESSIVE THOUGHTS.\n how much do your obsessive thoughts interfere with your work, school, social, or other important role functioning? Is there anything that you don\'t do because of them?',
                options: [{value: 'A', option: 'None'},
                {value: 'B', option: 'Slight interference with social or other activities, but overall performance not impaired'},
                {value: 'C', option: 'Definite interference with social or occupational performance, but still manageable'},
                {value: 'D', option: 'Causes substantial impairment in social or occupational performance'},
                {value: 'E', option: 'Incapacitating'}],
                selected: '',
            },{
                question: 'DISTRESS ASSOCIATED WITH OBSESSIVE THOUGHTS.\n how much distress do your obsessive thoughts cause you ?',
                options: [{value: 'A', option: 'None'},
                {value: 'B', option: 'Not too disturbing'},
                {value: 'C', option: 'Disturbing, but still manageable'},
                {value: 'D', option: 'Very disturbing'},
                {value: 'E', option: 'Near constant and disabling distress'}],
                selected: '',
            },{
                question: 'RESISTANCE AGAINST OBSESSIONS.\n How much of an effort do you make to resist the obsessive thoughts? How often do you try to disregard or turn your attention away from these thoughts as they enter your mind?',
                options: [{value: 'A', option: 'Try to resist all the time'},
                {value: 'B', option: 'Try to resist most of the times'},
                {value: 'C', option: 'Make some effort to resist'},
                {value: 'D', option: 'Yield to all obsessions without attempting to control them, but with some reluctance'},
                {value: 'E', option: 'Completely and willingly yield to all obsessions'}],
                selected: '',
            },{
                question: 'DEGREE OF CONTROL OVER OBSESSIVE THOUGHTS.\n How much control do you have over your obsessive thoughts? How successful are you in stopping or diverting your obsessive thinking? Can you dismiss them?',
                options: [{value: 'A', option: 'Complete control'},
                {value: 'B', option: 'Usually able to stop or divert obsessions with some effort and concentration'},
                {value: 'C', option: 'Sometimes able to stop or divert obsessions'},
                {value: 'D', option: 'successful in stopping or dismissing obsessions, can only divert attention with difficulty'},
                {value: 'E', option: 'Obsessions are completely involuntary, rarely able to even momentarily alter obsessive thinking'}],
                selected: '',
            },{
                question: 'TIME SPENT PERFORMING COMPULSIVE BEHAVIORS.\n How much time do you spend performing compulsive behaviors? How much longer than most people does it take to complete routine activities because of your rituals? How frequently do you do rituals?',
                options: [{value: 'A', option: 'None'},
                {value: 'B', option: 'Less than 1 hrs/day or occasional performance of compulsive behaviors'},
                {value: 'C', option: 'From 1 to 3 hrs/day, or frequent performance of compulsive behaviors'},
                {value: 'D', option: 'More than 3 and up to 8 hrs/day, or very frequent performance of compulsive behaviors'},
                {value: 'E', option: 'More than 8 hrs/day, or near constant performance of compulsive behaviors (too numerous to count)'}],
                selected: '',
            },{
                question: 'INTERFERENCE DUE TO COMPULSIVE BEHAVIORS.\n How much do your compulsive behaviors interfere with your work, school, social, or other important role functioning? Is there anything that you don’t do because of the compulsions?',
                options: [{value: 'A', option: 'None'},
                {value: 'B', option: 'Slight interference with social or other activities, but overall performance not impaired'},
                {value: 'C', option: 'Definite interference with social or occupational performance, but still manageable'},
                {value: 'D', option: 'Causes substantial impairment in social or occupational performance'},
                {value: 'E', option: 'Incapacitating'}],
                selected: '',
            },{
                question: 'DISTRESS ASSOCIATED WITH COMPULSIVE BEHAVIOR.\n How would you feel if prevented from performing your compulsion(s)? How anxious would you become?',
                options: [{value: 'A', option: 'None'},
                {value: 'B', option: 'Only slightly anxious if compulsions prevented'},
                {value: 'C', option: 'Anxiety would mount but remain manageable if compulsions prevented'},
                {value: 'D', option: 'Prominent and very disturbing increase in anxiety if compulsions interrupted'},
                {value: 'E', option: 'Incapacitating anxiety from any intervention aimed at modifying activity'}],
                selected: '',
            },{
                question: 'RESISTANCE AGAINST COMPULSIONS.\n How much of an effort do you make to resist the compulsions?',
                options: [{value: 'A', option: 'Always try to resist'},
                {value: 'B', option: 'Try to resist most of the time'},
                {value: 'C', option: 'Make some effort to resist'},
                {value: 'D', option: 'Yield to almost all compulsions without attempting to control them, but with some reluctance'},
                {value: 'E', option: 'Completely and willingly yield to all compulsions'}],
                selected: '',
            },{
                question: 'DEGREE OF CONTROL OVER COMPULSIVE BEHAVIOR.\n How strong is the drive to perform the compulsive behavior? How much control do you have over the compulsions?',
                options: [{value: 'A', option: 'Complete control'},
                {value: 'B', option: 'Pressure to perform the behavior but usually able to exercise voluntary control over it'},
                {value: 'C', option: 'Strong pressure to perform behavior, can control it only with difficulty'},
                {value: 'D', option: 'Very strong drive to perform behavior, must be carried to completion, can only delay with difficulty'},
                {value: 'E', option: 'Drive to perform behavior experienced as completely involuntary and over-powering, rarely able to even momentarily delay activity'}],
                selected: '',
            }
        ]
    }else if(type === '16PF') {
        this.state.questions = [{
            question: 'I have the instructions for this test clearly in mind.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I am ready to answer each question as truthfully as possible.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I would rather have a house.',
            options: [{value: 'A', option: 'In a sociable suburb'},{value: 'B', option: 'in between'},{value: 'C', option: 'salone in deep woods'}],
            selected: '',
        }, {
            questions:'I can find enough energy to face my difficulties.',
            options: [{value: 'A', option: 'always'},{value: 'B', option: 'generally'},{value: 'C', option: 'seldom'}],
            selected: '',
        }, {
            questions:'I feel a bit nervous of wild animals even when they are in strong cages.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I hold back from criticizing people and their ideas.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I make smart, sarcastic remarks to people if I think they deserve it.',
            options: [{value: 'A', option: 'Generally'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions:'I prefer semi classical music to popular tunes.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I saw two neighbour\'s children fighting, I would:',
            options: [{value: 'A', option: 'Leave them to settle it'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Reason with them'}],
            selected: '',
        }, {
            questions:'On social occasions I:',
            options: [{value: 'A', option: 'Readily come forward'},{value: 'B', option: 'in between'},{value: 'C', option: 'Prefer to stay quietly in the background'}],
            selected: '',
        }, {
            questions:'It would be more interesting to be :',
            options: [{value: 'A', option: 'A construction engineer'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'A writer of plays'}],
            selected: '',
        }, {
            questions:'I would rather stop in the street to watch an artist painting than listen to some people having a quarrel.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'I can generally put up with conceited people, even though they brag or show they think too well of themselves.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'You can almost always notice on a man\'s face when he is dishonest.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'It would be good for everyone if vacations (holidays) were longer and everyone had to take them.',
            options: [{value: 'A', option: 'Agree'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Disagree'}],
            selected: '',
        }, {
            questions:'I would rather take the gamble of a job with possibly large but uneven earnings, than one with a steady, small salary.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I  talk about my feelings.',
            options: [{value: 'A', option: 'Only if necessary'},{value: 'B', option: 'In between'},{value: 'C', option: 'Readily, whenever I have a chance'}],
            selected: '',
        }, {
            questions:'Once in a while I have a sense of vague danger or sudden dread for reasons that I do not understand.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'When criticized wrongly for something I did not do, I:',
            options: [{value: 'A', option: 'Have no feeling of guilt'},{value: 'B', option: 'In between'},{value: 'C', option: 'Still feel a bit guilty'}],
            selected: '',
        }, {
            questions:'Money can buy almost everything.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'My decisions are governed more by my :',
            options: [{value: 'A', option: 'Heart'},{value: 'B', option: 'Feelings and reason'},{value: 'C', option: 'Head'}],
            selected: '',
        }, {
            questions:'Most people would be happier if they lived more with their fellows and did the same things as others.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I occasionally get puzzled, when looking in a mirror, as to which is my right and left.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'When talking, I like :',
            options: [{value: 'A', option: 'To say things, just as they occur to me'},{value: 'B', option: 'In between'},{value: 'C', option: 'To get my thoughts well organized first'}],
            selected: '',
        }, {
            questions:'When something really makes me furious, I find I calm down again quite quickly.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'With the same hours and pay, it would be more interesting to be :',
            options: [{value: 'A', option: 'A carpenter or cook'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'A waiter in a good restaurant'}],
            selected: '',
        }, {
            questions:'I have been elected to:',
            options: [{value: 'A', option: 'only a few offices'},{value: 'B', option: 'several'},{value: 'C', option: 'many offices'}],
            selected: '',
        }, {
            questions:'"Spade" is to "dig" as "knife" is to:',
            options: [{value: 'A', option: 'sharp'},{value: 'B', option: 'cut'},{value: 'C', option: 'point'}],
            selected: '',
        }, {
            questions:'I sometimes can\'t get to sleep because an idea keeps running though my mind.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'In my personal life I reach the goals I set, almost the time.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'An outdated law should be changed :',
            options: [{value: 'A', option: 'Only after considerable discussion'},{value: 'B', option: 'In between'},{value: 'C', option: 'Promptly'}],
            selected: '',
        }, {
            questions:'I am uncomfortable when I work on a project requiring quick action affecting others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'Most of the people I know would rate me as an amusing talker.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'When I see "sloppy", untidy people, I:',
            options: [{value: 'A', option: 'Just accept it'},{value: 'B', option: 'In between'},{value: 'C', option: 'Get disgusted and annoyed.'}],
            selected: '',
        }, {
            questions:'I get slightly embarrassed if I suddenly become the focus of attention in a social group.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I am always glad to join a large gathering, for example, a part, dance or public meeting.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'In school I preferred (or prefer):',
            options: [{value: 'A', option: 'Music'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Handwork and crafts'}],
            selected: '',
        }, {
            questions:'When I have been put in charge of something, I insist that y instructions are followed or else I resign.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Sometimes'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'For parents it is more important to :',
            options: [{value: 'A', option: 'Help their children develop their affections'},{value: 'B', option: 'In between'},{value: 'C', option: 'Teach their children how to control emotions'}],
            selected: '',
        }, {
            questions:'In a group task I would rather :',
            options: [{value: 'A', option: 'Try to improve arrangements'},{value: 'B', option: 'In between'},{value: 'C', option: 'keep the record and see that rules are followed'}],
            selected: '',
        }, {
            questions:'Feel a need every now and then to engage in a tough physical activity.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I would rather mix with polite people than rough, rebellious individuals.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I  feel terribly dejected when people criticize me in a group.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'If I am called in by my boss, I:',
            options: [{value: 'A', option: 'make steady and "solid" citizens'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'more "idealists" with plans for a better world'}],
            selected: '',
        }, {
            questions:'What this world need is :',
            options: [{value: 'A', option: 'More steady and "solid" citizens'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'More "idealists" with plans for a better world'}],
            selected: '',
        }, {
            questions:'I am always keenly aware of attempts at propaganda in things  I read.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'As a teenager, I joined in school sports:',
            options: [{value: 'A', option: 'Occasionally'},{value: 'B', option: 'Fairly often'},{value: 'C', option: 'A great deal'}],
            selected: '',
        }, {
            questions:'I keep my room well organized, with things in known places almost all the time.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I sometimes  get in a state of tension and turmoil as I think of the day\'s happenings.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I sometimes doubt whether people I am talking to are really interested in what I am saying.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'If I \'had to choose, I would rather be:',
            options: [{value: 'A', option: 'a Forester'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'a high school teacher'}],
            selected: '',
        }, {
            questions:'For special holidays and birthdays, I:',
            options: [{value: 'A', option: 'like to give personal presents'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'feel that buying presents is a bit of a nuisance'}],
            selected: '',
        }, {
            questions:'"Tired" is to "work" and "proud" is to :',
            options: [{value: 'A', option: 'smile'},{value: 'B', option: 'success'},{value: 'C', option: 'happy'}],
            selected: '',
        }, {
            questions:'Which of the following items is different in kind from the others ?',
            options: [{value: 'A', option: 'candle'},{value: 'B', option: 'moon'},{value: 'C', option: 'electric light'}],
            selected: '',
        }, {
            questions:'I have been let down by my friends :',
            options: [{value: 'A', option: 'hardly ever'},{value: 'B', option: 'occasionally'},{value: 'C', option: 'quite a lot'}],
            selected: '',
        }, {
            questions:'I have some characteristics in which I feel definitely superior to most people.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'When I get upset, I try hard to hide my feelings from others.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'I like to go out to a show or entertainment:',
            options: [{value: 'A', option: 'more them once a week ( more than average)'},{value: 'B', option: 'about once a week'},{value: 'C', option: 'less than once a week (less than average)'}],
            selected: '',
        }, {
            questions:'I think that plenty of freedom is more important than good manner and respect for the law.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'I tend to keep quiet in the presence of senior persons (people of greater experience, age, or rank).',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I find it hard to address or recite to a large group.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I have a good sense of direction (find it easy to tell which is North, South, East, East or West) when in a strange place.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'If someone got mad at me, I would :',
            options: [{value: 'A', option: 'Try to calm him down'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Get irritated'}],
            selected: '',
        }, {
            questions:'When I read an unfair magazine article, I am more inclined to forget it than to feel like "hitting back".',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'My memory tends to drop a lot of unimportant, trivial things, for example, names of streets of stores in town.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I could enjoy the life of an animal doctor, handling disease and surgery of animals.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I eat food with gusto, not always so carefully and properly as some people.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'There times when I do not feel in the right mood to see anyone.',
            options: [{value: 'A', option: 'Very rarely'},{value: 'B', option: 'In between'},{value: 'C', option: 'Quite often'}],
            selected: '',
        }, {
            questions:'People sometimes warn me that I show my excitement in voice and manner too obviously.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'As a teenager, if I differed in opinion from my parents, I usually:',
            options: [{value: 'A', option: 'Kept my own opinion'},{value: 'B', option: 'In between'},{value: 'C', option: 'Accepted their authority'}],
            selected: '',
        }, {
            questions:'I would prefer to have an office of my own, not sharing it with another person.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I would rather enjoy life quietly in my own way than be admired for my achievements.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'I feel nature in most things',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'I find myself upset rather than helped by the kind criticism that many people offer one.',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions:'I am always able to keep the expression of my feelings under exact control.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'In starting a useful invention, I would prefer :',
            options: [{value: 'A', option: 'Working on it in the laboratory'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Selling it to people'}],
            selected: '',
        }, {
            questions:'" Surprise" is to "Strange" as "fear" is to :',
            options: [{value: 'A', option: 'Brave'},{value: 'B', option: 'Anxious'},{value: 'C', option: 'Terrible'}],
            selected: '',
        }, {
            questions:'Which of the following fractions is not the same class as the others.',
            options: [{value: 'A', option: '3/7'},{value: 'B', option: '3/9'},{value: 'C', option: '3/11'}],
            selected: '',
        }, {
            questions:'Some people seem to ignore or avoid me, although, I do not know why ?',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'People treat me less reasonably than my good intentions deserve.',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions:'The use of foul language, even when it is not in a mixed group of men and women, still disgusts me.',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions:'I have decidedly fewer friends than most people.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I would hate to be where there wouldn\'t be a lot of people to talk to.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'people sometimes call me careless, even though they mink I\'m likable person',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'"Stage-freight" in various social situations is something I have experienced:',
            options: [{value: 'A', option: 'quite often'},{value: 'B', option: 'occasionally'},{value: 'C', option: 'hardly ever'}],
            selected: '',
        }, {
            questions:'When  I  am  in  small  group,  I  am  content  to  sit  back  and  let  others  do most of the talking.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I prefer reading :',
            options: [{value: 'A', option: 'A realistic account of military or political battles'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'A sensitive, imaginative novel'}],
            selected: '',
        }, {
            questions:'When bossy people try to "push me around", I do just the opposite of what they wish',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'Business superiors or members of my family as a rule, find fault with me only when there is a real cause.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'In streets or stores, I dislike the way some persons stare at people.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'On a long journey, I would prefer to :',
            options: [{value: 'A', option: 'read something profound , but interesting'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'pass the time talking casually with a fellow passenger'}],
            selected: '',
        }, {
            questions:'In a situation which may become dangerous, I believe in making a fuss and speaking up even If calmness and politeness are lost.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'If acquaintances treat me badly and show they dislike me:',
            options: [{value: 'A', option: 'it does not'},{value: 'B', option: 'In between'},{value: 'C', option: 'I tend to get downhearted'}],
            selected: '',
        }, {
            questions:'I find it embarrassing to have praise or complements bestowed on me.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I would rather have a job with:',
            options: [{value: 'A', option: 'a fixed certain salary'},{value: 'B', option: 'In between'},{value: 'C', option: 'a larger salary, which depended on my constantly persuading people I am worth it'}],
            selected: '',
        }, {
            questions:'To keep informed, I like :',
            options: [{value: 'A', option: 'to discuss issues with people'},{value: 'B', option: 'In between'},{value: 'C', option: 'to rely on the actual news reports'}],
            selected: '',
        }, {
            questions:'I like to take an active part in social affairs committee work, etc.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'In carrying out a task, I am not satisfied unless even the minor details are given close attention.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'Quite small setbacks occasionally irritate me too much.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'I am always a sound sleeper, never walking or talking in my sleep.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'It would be more interesting to work in a business :',
            options: [{value: 'A', option: 'talking to customers'},{value: 'B', option: 'In between'},{value: 'C', option: 'Keeping office accounts and records'}],
            selected: '',
        }, {
            questions:'"Size" is to "length" as "dishonest" is to :',
            options: [{value: 'A', option: 'Prison'},{value: 'B', option: 'Sin'},{value: 'C', option: 'Stealing'}],
            selected: '',
        }, {
            questions:'AB is to DC as SR is to :',
            options: [{value: 'A', option: 'qp'},{value: 'B', option: 'pq'},{value: 'C', option: 'tu'}],
            selected: '',
        }, {
            questions:'When people are unreasonable, I just:',
            options: [{value: 'A', option: 'keep quiet'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'despise them'}],
            selected: '',
        }, {
            questions:'If people talk loudly while I am listening to music I:',
            options: [{value: 'A', option: 'can keep my mind on the music and not be bothered'},{value: 'B', option: 'In between'},{value: 'C', option: 'find it spoils my enjoyment and annoys me'}],
            selected: '',
        }, {
            questions:'I think I am better described as :',
            options: [{value: 'A', option: 'Polite and quiet'},{value: 'B', option: 'In between'},{value: 'C', option: 'forceful'}],
            selected: '',
        }, {
            questions:'I attend social functions only when I have to, and stay away any other time.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'To be cautious, and expect little is better than to be happy at heart, always expecting success.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'In thinking of difficulties in my work, I:',
            options: [{value: 'A', option: 'Try to plan ahead, before I meet them.'},{value: 'B', option: 'In between'},{value: 'C', option: 'assume I can handle them when they come'}],
            selected: '',
        }, {
            questions:'I, find it easy to mingle among people at a social gathering.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions:'When a bit of diplomacy and persuasion are needed to get people moving, I am generally the one asked to do it.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions:'It would be more interesting to be :',
            options: [{value: 'A', option: 'A guidance worker helping young people find jobs'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'A manager in efficiency engineering'}],
            selected: '',
        }, {
            questions: 'If I am quite sure that a person is unjust or behaving selfishly, I show him up, even if it takes some trouble.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'sometimes make foolish remarks in fun, just to surprise people and see what they will say.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I would enjoy being a newspaper writer on drama, concerts, opera, etc.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I never feel the urge to doodle and fidget when kept sitting still at a meeting.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'If someone tells me something which I know is wrong, I am more likely to say to myself:',
            options: [{value: 'A', option: 'He is a liar'},{value: 'B', option: 'In between'},{value: 'C', option: 'Apparently he is misinformed'}],
            selected: '',
        }, {
            questions: 'I feel some punishment is coming to me even when I have done nothing wrong.',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions: 'The  idea that sickness comes much   from mental  as  physical  causes is much exaggerated.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'The pomp and splendour of any big state ceremony are things which should be preserved.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'It bothers me if people think I am being too unconventional or odd.',
            options: [{value: 'A', option: 'A lot'},{value: 'B', option: 'Somewhat'},{value: 'C', option: 'Not at all'}],
            selected: '',
        }, {
            questions: 'In constructing something I would rather work',
            options: [{value: 'A', option: 'With a committee'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'on my own'}],
            selected: '',
        }, {
            questions: 'I have periods when it\'s hard to stop a mood of self pity.',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions: 'Often I get angry with people too quickly.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I can always change old habits without difficulty and without slipping back.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'If the earnings were the same, I would rather be :',
            options: [{value: 'A', option: 'A lawyer'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'A navigator or pilot'}],
            selected: '',
        }, {
            questions: '"Better" is to "worst" as "Slower" is to',
            options: [{value: 'A', option: 'Fast'},{value: 'B', option: 'Best'},{value: 'C', option: 'Quickest'}],
            selected: '',
        }, {
            questions: 'Which of the following should come next to the end of this row of letters : xooooxxoooxxx ?',
            options: [{value: 'A', option: 'oxxx'},{value: 'B', option: 'ooxx'},{value: 'C', option: 'xooo'}],
            selected: '',
        }, {
            questions: 'When the time comes for something I have planned and looked forwards to, I occasionally do not feel up to going.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'I can work carefully on most things without being bothered by people making a lot of noise around me.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I occasionally tell strangers things that seem to me important, regardless of whether they ask about them.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I spend much of my spare time talking with friends about social events enjoyed in the past.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I enjoy doing "doing", foolhardy things "just for fun"',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I find the sight of an untidy room very annoying.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I consider myself a very sociable, outgoing person.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'In social contacts I:',
            options: [{value: 'A', option: 'Show my emotions as I wish'},{value: 'B', option: 'In between'},{value: 'C', option: 'Keep by emotions to myself'}],
            selected: '',
        }, {
            questions: 'I enjoy music that is :',
            options: [{value: 'A', option: 'Light, Dry and brisk'},{value: 'B', option: 'In between'},{value: 'C', option: 'Emotional and sentimental'}],
            selected: '',
        }, {
            questions: 'I admire the beauty of a poem more than that of a well made gun.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'If a good remark of mine is passed by, I:',
            options: [{value: 'A', option: 'Let it go'},{value: 'B', option: 'In between'},{value: 'C', option: 'Give people a chance to hear it again'}],
            selected: '',
        }, {
            questions: 'I would like to work as a probation officer with criminals on parole.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'One should be careful about mixing with all kinds of strangers, since there are dangers of infection and so on.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'In travelling abroad, I would rather go on an expertly conducted tour plan by myself the places I wish to visit.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I am properly regarded as only a plodding, half successful person',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'If people take advantage of my friendliness, I do not resent it and I soon forget.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'If a hearted argument developed between other members taking  part in a group discussion, I would :',
            options: [{value: 'A', option: 'Like to see a "winner”'},{value: 'B', option: 'In between'},{value: 'C', option: 'With that it would be smoothed over'}],
            selected: '',
        }, {
            questions: 'I like to do my planning alone, without interruptions and Suggestions from others.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I sometimes let my actions get swayed by feelings of  jealousy.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I believe firmly "the boss may not always be right, but he always has the right to be boss"',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I get tense as I think of all the things lying ahead of me.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'If people shout suggestions when I\'m playing a game, it doesn\'t upset me.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'It would be more interesting to be :',
            options: [{value: 'A', option: 'An artist'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'a secretary running a club'}],
            selected: '',
        }, {
            questions: 'Which of the following words does not properly belong with others?',
            options: [{value: 'A', option: 'Any'},{value: 'B', option: 'Some'},{value: 'C', option: 'Most'}],
            selected: '',
        }, {
            questions: '"Flame" is to "heat" as "rose" is to :',
            options: [{value: 'A', option: 'Thorn'},{value: 'B', option: 'Red petals'},{value: 'C', option: 'Scent'}],
            selected: '',
        }, {
            questions: 'I have vivid dreams, disturbing my sleep',
            options: [{value: 'A', option: 'Often'},{value: 'B', option: 'Occasionally'},{value: 'C', option: 'Practically never'}],
            selected: '',
        }, {
            questions: 'If the odds are really against something\'s being a success, I still believe in taking the risk',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I like it when I know so well what the group has to do that I naturally become the one in command.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I would rather dress with quiet correctness than with eye- catching personal style.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'An evening with a quiet hobby appeals to me more than a lively party.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'I close my mind to well meant suggestions of others, even though I know I shouldn\'t',
            options: [{value: 'A', option: 'Occasionally'},{value: 'B', option: 'hardly ever'},{value: 'C', option: 'Never'}],
            selected: '',
        }, {
            questions: 'I always make it a point, in deciding anything to refer to basic rules of right and wrong.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I somewhat dislike having a group watch me at work',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'Because it is not always possible to get things done by gradual, reasonable methods, it is sometimes necessary to use force.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'In school I  prefer:',
            options: [{value: 'A', option: 'English'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Mathematics/Arithmetic'}],
            selected: '',
        }, {
            questions: 'I have sometimes been troubled by people\'s saying bad things behind my back, with no grounds at all.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'Talk with ordinary, habit bound, conventional people :',
            options: [{value: 'A', option: 'Is often quite interesting and has a lot to it'},{value: 'B', option: 'In between'},{value: 'C', option: 'Annoys me because it deals with trifles and lacks depth'}],
            selected: '',
        }, {
            questions: 'Some things make me so angry then I find it best not to speak.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'In education, it is more important to :',
            options: [{value: 'A', option: 'Give the child enough affection'},{value: 'B', option: 'In between'},{value: 'C', option: 'Have the child learn desirable habits and attitudes'}],
            selected: '',
        }, {
            questions: 'People regard me as a solid, understand undisturbed person, unmoved by ups and down in circum-stances.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I think society should let reason lead it to new customs and throw aside old habits or mere tradition',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I think it is more important in the modern world to solve :',
            options: [{value: 'A', option: 'The question of moral purpose'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'The political difficulties'}],
            selected: '',
        }, {
            questions: 'Learn better by:',
            options: [{value: 'A', option: 'Reading a well written book'},{value: 'B', option: 'In between'},{value: 'C', option: 'Joining a group discussion'}],
            selected: '',
        }, {
            questions: 'I like to go my own way instead of acting on approved rules',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'I  like to wait till I am sure that what I am saying is correct, before I put forth an argument.',
            options: [{value: 'A', option: 'Always'},{value: 'B', option: 'Generally'},{value: 'C', option: 'Only if it\'s practicable '}],
            selected: '',
        }, {
            questions: 'Small things sometimes "get on my nerves" unbearably, though I realize they are trivial.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I don\'t often say things on the spur of the moment that I regret.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'If asked to work with a charity drive, I would',
            options: [{value: 'A', option: 'Accept'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Politely say I\'m too busy'}],
            selected: '',
        }, {
            questions: 'Which of the following words does not belong with others ?',
            options: [{value: 'A', option: 'Wide'},{value: 'B', option: 'Zigzag'},{value: 'C', option: 'Straight'}],
            selected: '',
        }, {
            questions: '"Soon" is to "never" as "near" is to :',
            options: [{value: 'A', option: 'Nowhere'},{value: 'B', option: 'Far'},{value: 'C', option: 'Away'}],
            selected: '',
        }, {
            questions: 'If I make an awkward social mistake, I can forget it.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I am known as an "idea man" who almost always puts forward some ideas on a problem.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I think I am better at showing :',
            options: [{value: 'A', option: 'Nerve in meeting challenges'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'Tolerance of other people\'s wishes'}],
            selected: '',
        }, {
            questions: 'I am considered a very enthusiastic person.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I like a job that offers change, variety and travel, even if it in involves some danger',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I am a fairly strict person, insisting on always doing things as correctly as possible.',
            options: [{value: 'A', option: 'True'},{value: 'B', option: 'In between'},{value: 'C', option: 'False'}],
            selected: '',
        }, {
            questions: 'I enjoy work that requires conscientious, exacting skills.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'In between'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I\'m the energetic type who keeps busy.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }, {
            questions: 'I am sure there are no questions that I have skipped or failed to answer properly.',
            options: [{value: 'A', option: 'Yes'},{value: 'B', option: 'Uncertain'},{value: 'C', option: 'No'}],
            selected: '',
        }
    ]
    }else if(type === 'Connos') {

    }else if(type === 'SPM') {

    }else if(type === 'HTP') {
        this.state.questions = [{
            questions: 'This test is a measure of personality. Now please be seated comfortably as now I am going to present you with some papers where you have to draw a house, tree, and a person respectively.',
        }]

    }else if(type === 'CAT') {
        this.state.questions = [
          {
            question: CAT1,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT2,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT3,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT4,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT5,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT6,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT7,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT8,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT9,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT10,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          },
          {
            question: CAT11,
            options: [{value: 'A', option: ''}],
            selected: 'A',

          }
        ]

    }else if(type === 'DAP') {
        this.state.questions = [{
            questions: 'Please make a picture of a person. Make the very best picture that you can. Take your time and work very carefully. Try very hard and see what a good picture you can make.',
        }]

    }
    this.setState({state: this.state})
}

next = () => {
    let number = this.state.questions.length;

    if (this.state.number!==number) {
      if (localStorage.getItem("type") == "CAT" || localStorage.getItem("type") == "ROR" || localStorage.getItem("type") == "TAT"){
        if(this.state.value != ''){
          this.setState({
              number: this.state.number+1,
              value: ''
          });
        }
      }else if (this.state.questions[this.state.number-1].selected!=='') {
        this.setState({
            number: this.state.number+1,
        });
        }
    }
    else {
      var resultArray = [], selected;
        for (var i=0; i<this.state.questions.length; i++) {
            {this.state.questions[i].options.map(option => {
              if (option.value === this.state.questions[i].selected){
                selected = option.option;
              }
            })}
            resultArray = [...resultArray, {'question': this.state.questions[i].question, 'answer': selected}]
            console.log(resultArray, "resultArray");
            if (this.state.questions[i].selected==='A') {
                total.A = total.A+1;
            }
            else if (this.state.questions[i].selected==='B') {
                total.B = total.B+1;
            }
            else {
                total.C = total.C+1;
            }
        };
        this.props.history.push({
            pathname: '/results',
            state: total,
            resultArray: resultArray,
        })
    }
}

handleChange(event) {
  this.state.questions[this.state.number-1].options[0].option = event.target.value
  this.setState(this.state)
  this.setState({ value: event.target.value })
  }
select = data => {
    this.state.questions[this.state.number-1].selected = data;
    this.setState({state: this.state});
}

    render() {
        return (
            <Fragment>
                <div style={{background: '#ECF3F8'}}>
                    <div style={isMobile?mobStyle:webStyle}>
                        <Card style={{boxShadow: '0px 6px 25px #0000001A', marginTop: '20px', border: 'none'}}>
                        <div style={{background: '#F6F6F6', padding: '30px 20px', fontFamily: 'Nunito-Bold'}}>
                            <div>Mindlyf Emotional wellness {this.props.location.state && this.props.location.state[2] === "paid-test" ? "PAID-TESTS" :"SELF-TESTS"}</div>
                            <div style={{fontFamily: 'Roboto'}}>Question {this.state.number} of {this.state.questions.length}</div>
                        </div>
                            { localStorage.getItem("type") != "CAT" && localStorage.getItem("type") != "ROR" && localStorage.getItem("type") != "TAT" ?
                            <CardBody>
                                <div style={{fontSize: '14px'}}>
                                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '16px'}}>{this.state.questions[this.state.number-1].question}</div>
                                    <div className="hoverOption" onClick={() => this.select('A')} style={this.state.questions[this.state.number-1].selected==='A'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>A )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[0].option}</span>
                                    </div>
                                    <div className="hoverOption" onClick={() => this.select('B')} style={this.state.questions[this.state.number-1].selected==='B'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>B )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[1].option}</span>
                                    </div>
                                    {this.state.questions[this.state.number-1].options[2] ? <div className="hoverOption" onClick={() => this.select('C')} style={this.state.questions[this.state.number-1].selected==='C'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>C )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[2].option}</span>
                                    </div> : ''}
                                    {this.state.questions[this.state.number-1].options[3]  && <div className="hoverOption" onClick={() => this.select('D')} style={this.state.questions[this.state.number-1].selected==='D'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>D )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[3].option}</span>
                                    </div>}
                                    {this.state.questions[this.state.number-1].options[4] && <div className="hoverOption" onClick={() => this.select('E')} style={this.state.questions[this.state.number-1].selected==='E'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>E )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[4].option}</span>
                                    </div>}
                                    <div style={{margin: '20px 0px'}}><Button onClick={this.next} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>Continue<FontAwesomeIcon icon={faChevronRight} style={{color: '#DF8F06', marginLeft: '20px'}}/></Button></div>
                                </div>
                            </CardBody>
                            :
                            <CardBody>
                                <div style={{fontSize: '14px'}}>
                                  <div style={{fontFamily: 'Nunito-Bold', fontSize: '16px'}}>This is a test of imagination, one form of intelligence. You are going to be presented with some pictures, one at a time, and your task is to make up as dramatic a story as you can for each. Tell what has happened in the past of the picture, describe what's happening in the present and what is going to happen in the future in this picture. You also have to describe what the characters are feeling and thinking. You can devote approximately 5 minutes per story, but you can also take longer if desired.</div>
                                  <div><img className="question-image" width={150} height={150} src={this.state.questions[this.state.number-1].question} /></div>
                                  <div>
                                      <span style={{fontFamily: 'Nunito-Bold'}}><textarea value={this.state.value} onChange={this.handleChange} cols={80} placeholder="Please write your answer here" /></span>
                                  </div>
                                  <div style={{margin: '20px 0px'}}><Button onClick={this.next} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>Continue<FontAwesomeIcon icon={faChevronRight} style={{color: '#DF8F06', marginLeft: '20px'}}/></Button></div>
                                </div>
                            </CardBody>
                          }
                        </Card>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Questions);
