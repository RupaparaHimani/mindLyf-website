import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import CssFile from './index.css'

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleOnSelect = (value) => {
    var joinpath = "";
    this.setState({ value })
    if (value == "Depression Counselling"){
      joinpath = "/services/stress"
    }else if (value == "Relationship Counselling"){
      joinpath = "/services/relationship"
    }else if (value == "Flourish at Work"){
      joinpath = "/services/flourish"
    }else if (value == "Boost Self Esteem and Confidence"){
      joinpath = "/services/esteem"
    }else if (value == "Parenting Done Right"){
      joinpath = "/services/parenting"
    }else if (value == "Special Children"){
      joinpath = "/services/special-children"
    }else if (value == "Mental Health Disorders"){
      joinpath = "/services/mental-health"
    }else if (value == "Therapies"){
      joinpath = "/services/therapies"
    }else if (value == "Anger Management"){
      joinpath = "/programs/anger-management/1"
    }else if (value == "Overcome Depression and anxiety"){
      joinpath = "/programs/depression/2"
    }else if (value == "Self-Motivation"){
      joinpath = "/programs/motivation/3"
    }else if (value == "Overcome Loneliness"){
      joinpath = "/programs/loneliness/4"
    }else if (value == "Leave Your Procrastination"){
      joinpath = "/programs/procrastination/5"
    }else if (value == "Develop Self-Esteem and Confidence"){
      joinpath = "/programs/self-esteem/6"
    }else if (value == "Stress Management"){
      joinpath = "/programs/stress/7"
    }else if (value == "Resolve Your Family Issues"){
      joinpath = "/programs/family/8"
    }else if (value == "Improve Your Relationship With your…"){
      joinpath = "/programs/relationship/9"
    }else if (value == "Improve Your Marriage"){
      joinpath = "/programs/marriage/10"
    }else if (value == "Manage Pre-Wedding Jitters"){
      joinpath = "/programs/marriage-jitters/11"
    }else if (value == "Build Your Dream Career"){
      joinpath = "/programs/dream-career/12"
    }else if (value == "Easy Career Transition"){
      joinpath = "/programs/career-transition/13"
    }else if (value == "Counselling for Entrepreneurs"){
      joinpath = "/programs/entrepreneurs/14"
    }else if (value == "Learn to Embrace Your Sexuality"){
      joinpath = "/programs/sexuality/15"
    }else if (value == "Sex Education"){
      joinpath = "/programs/sex-education/16"
    }else if (value == "Identify Sexual Disorders"){
      joinpath = "/programs/sexual-disorder/17"
    }else if (value == "Therapy for Sexual Abuse "){
      joinpath = "/programs/sexual-abuse/18"
    }else if (value == "Counselling for LGBTQIA Individual"){
      joinpath = "/programs/lgbtq/19"
    }

    console.log("====this.props",this.props);
    const { history } = this.props;
    history.push(joinpath)

    // this.props.history.push({
    //     pathname: '/services/'+joinpath
    // })
  }

    render(){
      return(

      <ReactAutocomplete
      items={[
        { id: 'Depression Counselling', label: 'Depression Counselling, WHO claims we all feel either of emotions in a lifetime, and its necessary for one to get the right help at the right time, theres a thin line between sadness and depression, be smart enough to not be fooled by your own emotions' },
        { id: 'Relationship Counselling', label: 'Relationship Counselling, They say its easy to jump into a relationship but difficult to maintain one, relationships are beautiful and need to be worked on time to time, here more for you to know' },
        { id: 'Flourish at Work', label: 'Success is something we are all looking for, its easier when we flourish. Also, who doesnt want to walk with pride and a satisfactory smile every morning' },
        { id: 'Boost Self Esteem and Confidence', label: 'Flourish at Work, Confidence and esteem is simply ours but sometimes we can lose it, lets bring it back and empower ourselves' },
        { id: 'Parenting Done Right', label: 'Parenting Done Right, Not necessarily parents are right all the time, we can make mistakes, lets understand ourselves and children better to bring out the best in us by gracefully making the necessary changes' },
        { id: 'Special Children', label: 'Special Children, We are all special in a certain way, but there are much more special out there, Know More to understand learning disabilities, autism, down syndromes and more' },
        { id: 'Mental Health Disorders', label: 'Mental Health Disorders, Lets know in-depth about narcissism, schizophrenia, bipolar disorder, and many more that were faintly heard or known about' },
        { id: 'Therapies', label: 'Therapies, Now that there are problems, we do have our little ways to solve these problems by various therapies we use such as CBT, Gestalt, REBT, TA and many more' },
        // program
        { id: 'Anger Management', label: 'self, Anger Management, Life gets messy sometimes, it is okay to get angry, but when you feel you are losing control of your emotions, dont resist, seek help' },
        { id: 'Overcome Depression and anxiety', label: 'self, Overcome Depression and anxiety, Constantly feeling sad or depressed / anxious? do nott let that the insect grow, here is a chance to kill the bug and be the person you wish to be' },
        { id: 'Self-Motivation', label: 'self, Self-Motivation, Learn to be self-motivated by understanding what is stopping you from doing and thinking right ' },
        { id: 'Overcome Loneliness', label: 'self, Overcome Loneliness, Why gather dust sitting at one corner feeling unloved and uncared. Lets beat loneliness together' },
        { id: 'Leave Your Procrastination', label: 'self, Leave Your Procrastination, Delaying anything will delay success. Spontaneity is what we need. Procrastination is as dangerous as a fish out of water' },
        { id: 'Develop Self-Esteem and Confidence', label: 'self, Develop Self-Esteem and Confidence, If you are able to develop self-esteem and confidence, you can stand on your feet anywhere and anytime on this planet' },
        { id: 'Stress Management', label: 'self, Stress Management, It is a practice of calming your nerves so that you dont drown under pressure. Stress management will help you float on water all the time' },
        { id: 'Resolve Your Family Issues', label: 'Relationship, Resolve Your Family Issues, Together we stand, divided we fall. Resolving family issues should always be a priority' },
        { id: 'Improve Your Relationship With your…', label: 'Relationship, Improve Your Relationship With your…, With two people, come conflicts and love, lets learn to strike a balance and live happier. A little effort is no harm' },
        { id: 'Improve Your Marriage', label: 'Relationship, Improve Your Marriage, Marriage is not just about love, differences can hamper slowly, lets sort them by bringing a middle wa' },
        { id: 'Manage Pre-Wedding Jitters', label: 'Relationship, Manage Pre-Wedding Jitters, Feeling cold feet before marriage is okay, But, to calm those jitters and imagine a happy married life is priceless' },
        { id: 'Build Your Dream Career', label: 'Career, Build Your Dream Career, Witnessing a dream career turns into reality is the most cherishing moment in life.  A career that revolves around you makes YOU!' },
        { id: 'Easy Career Transition', label: 'Career, Easy Career Transition, Changing jobs can be difficult at times. No transition is ever easy. But having a mentor would make it like having a walk in a park' },
        { id: 'Counselling for Entrepreneurs', label: 'Career, Counselling for Entrepreneurs, Entrepreneurship is like making a new dish but not knowing whether people will like it or no. This phase of entrepreneurs is the most sensitive one which needs counselling' },
        { id: 'Learn to Embrace Your Sexuality', label: 'sex, Learn to Embrace Your Sexuality, Knowing yourself is not wrong! A hidden sexuality is a sign of reluctancy. A sign that you don’t like yourself which results in unhappiness and enraged mood swings' },
        { id: 'Sex Education', label: 'Sex Education, Sex Education is the study of one is sexuality and desires. Let’s end the stigma by ending the curiosity and being open about it' },
        { id: 'Identify Sexual Disorders', label: 'sex, Identify Sexual Disorders, Sexual disorders are extremely harmful as it might affect relationships. Identifying them and opening up plus getting a solution should not be a shy thing' },
        { id: 'Therapy for Sexual Abuse ', label: 'sex, Therapy for Sexual Abuse, Sexual abuse destroys one’s inner peace, it’s all the more difficult to live with it, why not find a way to make peace in our minds' },
        { id: 'Counselling for LGBTQIA Individual', label: 'sex, Counselling for LGBTQIA Individual, Why are we looked differently in the society, bothering you too much? Let is get it sorted in our head. LGBTQIA should also be given importance' },
      ]}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      getItemValue={item => item.id}
      isOpen = {false}
      autoHighlight = {false}
      wrapperStyle={{ position: 'relative',  display: 'contents' }}
      renderItem={(item, highlighted) =>
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#005191' : 'transparent',color:  highlighted ? '#fff' : "#064d8d",padding: '8px 15px', fontSize: '14px', cursor: 'pointer', whiteSpace: 'wrap'}}
        >
          {item.id}
        </div>
      }
      inputProps={{ placeholder: 'Search..' }}
      value={this.state.value}
      onChange={e => this.setState({ value: e.target.value })}
      onSelect={value => this.handleOnSelect(value)}
      menuStyle={{
        background: '#f5f5f5',
        zIndex:"55",
        borderRadius: '3px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        padding: '0 0 20px',
        position: 'fixed',
        overflow: 'auto',
        maxHeight: '200px',
      }}
    />

    )
  }
}
export default withRouter(App);;
