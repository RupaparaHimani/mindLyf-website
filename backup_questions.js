import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Row, Col } from 'reactstrap';
import { isMobile, isTablet } from 'react-device-detect';
import Subscribe from '../../components/Subscribe';

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
    }
}

componentDidMount = () => {
    let type = localStorage.getItem('type');
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
        ];} else if(type === 'MSMI') {

    } else if(type === 'MPMI') {

    }else if(type === 'TAT') {

    }else if(type === 'ROR') {

    }else if(type === 'Mascarenhas') {

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
            question: 'TIME OCCUPIED BY OBSESSIVE THOUGHTS. how much of your time is occupied by obsessive thoughts?',
            options: [{value: 'A', option: 'Never'},{value: 'B', option: 'Rarely'},{value: 'C', option: 'Sometimes'},{value: 'D', option: 'Often'},{value: 'E', option: 'Very Often'}],
            selected: '',
        },
            {
                question: 'How often do you have difficulty getting things in order when you have to do a task that requires organizations?',
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
    }else if(type === '16PF') {

    }else if(type === 'Connos') {

    }else if(type === 'SPM') {

    }else if(type === 'HTP') {

    }else if(type === 'CAT') {

    }else if(type === 'DAP') {


    }
    this.setState({state: this.state})
}

next = () => {
    let number = this.state.questions.length;
    if (this.state.number!==number) {
        if (this.state.questions[this.state.number-1].selected!=='') {
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
                            <CardBody>
                                <div style={{fontSize: '14px'}}>
                                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '16px'}}>{this.state.questions[this.state.number-1].question}</div>
                                    <div className="hoverOption" onClick={() => this.select('A')} style={this.state.questions[this.state.number-1].selected==='A'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>A )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[0].option}</span>
                                    </div>
                                    <div className="hoverOption" onClick={() => this.select('B')} style={this.state.questions[this.state.number-1].selected==='B'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>B )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[1].option}</span>
                                    </div>
                                    <div className="hoverOption" onClick={() => this.select('C')} style={this.state.questions[this.state.number-1].selected==='C'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>C )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[2].option}</span>
                                    </div>
                                    {this.state.questions[this.state.number-1].options[3] && <div className="hoverOption" onClick={() => this.select('D')} style={this.state.questions[this.state.number-1].selected==='D'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>C )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[3].option}</span>
                                    </div>}
                                    {this.state.questions[this.state.number-1].options[4] && <div className="hoverOption" onClick={() => this.select('E')} style={this.state.questions[this.state.number-1].selected==='E'?selected:null}>
                                        <span style={{fontFamily: 'Nunito-Bold'}}>C )</span><span style={{marginLeft: '10px'}}>{this.state.questions[this.state.number-1].options[4].option}</span>
                                    </div>}
                                    <div style={{margin: '20px 0px'}}><Button onClick={this.next} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>Continue<FontAwesomeIcon icon={faChevronRight} style={{color: '#DF8F06', marginLeft: '20px'}}/></Button></div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Questions);
