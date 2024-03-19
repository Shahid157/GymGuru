import {iconMapping} from '../../assets/icons/iconMap';
import {Images} from '../../assets/images';
import {Colors} from '../colors';
import strings from '../strings';

export const data = [
  {name: 'Saif Uddin', status: 'Sample client', image: Images.dummyImage},
];
export const chartData = {
  labels: ['02/10', '02/20', '03/02', '03/12', '03/22', '04/01'],
  datasets: [
    {
      data: [183, 160, 150, 140, 120, 105, 90],
    },
  ],
};
export const weightChartData = {
  labels: ['', '7 Day', '30 Day', '90 Day', '1 Year', 'All Time'],
  datasets: [
    {
      data: [90, 170, 172, 160, 179, 185, 200, 165, 140, 150, 160, 183],
    },
  ],
};

export const exerciseChartData = {
  labels: ['02/10', '02/20', '03/02', '03/12', '03/22', '04/01'],
  datasets: [
    {
      data: [90, 105, 120, 140, 150, 160, 183],
    },
  ],
};

export const lineChartDayData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [125.0, 123.8],
    },
  ],
};
export const lineChartWeekData = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
  datasets: [
    {
      data: [125.0, 123.8],
    },
  ],
};
export const lineChartMonthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      data: [125.0, 123.8],
    },
  ],
};
export const lineChartYearData = {
  labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
  datasets: [
    {
      data: [125.0, 123.8],
    },
  ],
};
export const chartWeightData = [
  {
    userDetails: 'Weight',
  },
];

export const sectionsData = [
  {
    id: 0,
    activityName: 'Profile_Header',
  },
  {
    id: 1,
    day: 'Metrics',
    activityName: 'Weight',
    activityCount: '183',
  },
];

export const measurements = [
  {
    bodypart: 'BF (%)',
    status: 'N/A',
    image: iconMapping['activityIcon'],
  },
  {
    bodypart: 'Shoulder',
    status: 'N/A',
  },
  {
    bodypart: 'Chest',
    status: 'N/A',
  },
  {
    bodypart: 'Waist',
    status: 'N/A',
  },
  {
    bodypart: 'Hips',
    status: 'N/A',
  },
  {
    bodypart: 'Thighs',
    status: 'N/A',
  },
  {
    bodypart: 'Upper arm',
    status: 'N/A',
  },
  {
    bodypart: 'Calfs',
    status: 'N/A',
  },
];

export const goalsData = [
  {
    days: '2 days left',
    progessGoals: 'Lose 30 lbs',
    progress: 0.7,
  },
  {
    days: '54 days left',
    progessGoals: 'Train for 40 weeks',
    progress: 0.4,
  },
];

export const excerciseData = [
  {
    image: Images.dumbbell,
    title: 'Dumbbell Rare Delt Row',
    time: '1 time',
    bodyPart: 'SHOULDERS',
  },
  {
    image: Images.kettlebell,
    title: 'Kettlebell Goblet Squat',
    time: '1 time',
    bodyPart: 'CHEST',
  },
  {
    image: Images.deadLift,
    title: 'Axle Deadlift',
    time: '1 time',
    bodyPart: 'LOWER BACK',
  },
  {
    image: Images.barbell,
    title: 'Barbell Full Squat',
    time: '1 time',
    bodyPart: 'QUADRICEPS',
  },
  {
    image: Images.chainUp,
    title: 'Chain-up',
    time: '1 time',
    bodyPart: 'LATS',
  },
];

export const barChartDayData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: [170, 210, 320, 185, 185, 185, 185],
      colors: [
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
      ],
    },
  ],
};
export const stepDailyChartData = {
  labels: ['12:00 am', '', '6:00 am', '', '12:00 pm', '', '6:00 pm'],
  datasets: [
    {
      data: [0, 210, 320, 185, 185, 185, 400],
      colors: [
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
      ],
    },
  ],
};
export const stepWeeklyChartData = {
  labels: ['Mon', '', 'Tue', '', 'Wed', '', 'Thu'],
  datasets: [
    {
      data: [0, 210, 320, 185, 185, 185, 400],
      colors: [
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
      ],
    },
  ],
};
export const stepMonthlyChartData = {
  labels: ['Jan', '', 'Feb', '', 'Mar', '', 'Apr'],
  datasets: [
    {
      data: [0, 210, 320, 185, 185, 185, 400],
      colors: [
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
      ],
    },
  ],
};
export const stepYearlyChartData = {
  labels: ['2021', '', '2022', '', '2023', '', '2024'],
  datasets: [
    {
      data: [0, 210, 320, 185, 185, 185, 400],
      colors: [
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#EB5757`,
      ],
    },
  ],
};
export const barchartWeekData = {
  labels: ['week1', 'week2', 'week2', 'week4', 'week3', 'week6', 'week4'],
  datasets: [
    {
      data: [170, 210, 270, 185, 185, 185, 185],
      colors: [
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#Ffff`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#Ffff`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#Ffff`,
        (opacity = 1) => `#FCE6E6`,
      ],
    },
  ],
};
export const barchartMonthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      data: [170, 210, 320, 185, 185, 185, 185],
      colors: [
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
      ],
    },
  ],
};
export const barchartYearData = {
  labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
  datasets: [
    {
      data: [170, 210, 320, 185, 185, 185, 185],
      colors: [
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#EB5757`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
        (opacity = 1) => `#FCE6E6`,
      ],
    },
  ],
};

export const dailyProgressChartData = {
  labels: [
    {macro: 'Protein', consumed: '34 g', remaining: '101 g', goal: '135 g'},
    {macro: 'Carbs', consumed: '73 g', remaining: '127 g', goal: '200 g'},
    {macro: 'Fat', consumed: '11 g', remaining: '44 g', goal: '55 g'},
    {macro: 'kcal', consumed: '34 g', remaining: '96 g', goal: '76 g'},
  ],
  data: [0.5, 0.65, 0.6, 0.7],
  colors: [
    'rgba(97, 174, 255, 1)',
    'rgba(98, 196, 178, 1)',
    'rgba(242, 201, 76, 1)',
    'rgba(235, 87, 87, 1)',
  ],
};
export const weeklyProgressChartData = {
  labels: [
    {macro: 'Protein', consumed: '54 g', remaining: '151 g', goal: '165 g'},
    {macro: 'Carbs', consumed: '63 g', remaining: '126 g', goal: '260 g'},
    {macro: 'Fat', consumed: '31 g', remaining: '49 g', goal: '45 g'},
    {macro: 'kcal', consumed: '39 g', remaining: '106 g', goal: '78 g'},
  ],
  data: [0.4, 0.6, 0.5, 0.6],
  colors: [
    'rgba(97, 174, 255, 1)',
    'rgba(98, 196, 178, 1)',
    'rgba(242, 201, 76, 1)',
    'rgba(235, 87, 87, 1)',
  ],
};
export const monthlyProgressChartData = {
  labels: [
    {macro: 'Protein', consumed: '64 g', remaining: '176 g', goal: '175 g'},
    {macro: 'Carbs', consumed: '79 g', remaining: '147 g', goal: '300 g'},
    {macro: 'Fat', consumed: '18 g', remaining: '54 g', goal: '95 g'},
    {macro: 'kcal', consumed: '44 g', remaining: '65 g', goal: '75 g'},
  ],
  data: [0.4, 0.5, 0.55, 0.66],
  colors: [
    'rgba(97, 174, 255, 1)',
    'rgba(98, 196, 178, 1)',
    'rgba(242, 201, 76, 1)',
    'rgba(235, 87, 87, 1)',
  ],
};
export const yearlyProgressChartData = {
  labels: [
    {macro: 'Protein', consumed: '234 g', remaining: '167 g', goal: '165 g'},
    {macro: 'Carbs', consumed: '173 g', remaining: '165 g', goal: '250 g'},
    {macro: 'Fat', consumed: '111 g', remaining: '144 g', goal: '155 g'},
    {macro: 'kcal', consumed: '78 g', remaining: '296 g', goal: '176 g'},
  ],
  data: [0.35, 0.45, 0.49, 0.6],
  colors: [
    'rgba(97, 174, 255, 1)',
    'rgba(98, 196, 178, 1)',
    'rgba(242, 201, 76, 1)',
    'rgba(235, 87, 87, 1)',
  ],
};

export const macroDistributionData = {
  labels: [
    {macro: 'Protein', actual: '50%', goal: '50%'},
    {macro: 'Carbs', actual: '50%', goal: '50%'},
    {macro: 'Fat', actual: '50%', goal: '50%'},
    {macro: 'kcal', actual: '50%', goal: '50%'},
  ],
  colors: [
    'rgba(97, 174, 255, 1)',
    'rgba(98, 196, 178, 1)',
    'rgba(242, 201, 76, 1)',
    'rgba(235, 87, 87, 1)',
  ],
};

export const stackedBarDayData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  data: [
    [12, 12, 12],
    [14, 14, 14],
    [20, 20, 20],
    [16, 16, 16],
    [11, 11, 11],
    [15, 15, 15],
    [12, 12, 13],
  ],
  barColors: ['#EB5757', '#F2C94C', '#61AEFF'],
};
export const stackedBarChartWeekData = {
  labels: ['week1', 'week2', 'week2', 'Wed', 'week3', 'Fri', 'week4'],
  data: [
    [12, 12, 12],
    [0, 0, 0],
    [20, 20, 20],
    [0, 0, 0],
    [11, 11, 11],
    [0, 0, 0],
    [12, 12, 13],
  ],
  barColors: ['#EB5757', '#F2C94C', '#61AEFF'],
};
export const stackedBarChartMonthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  data: [
    [12, 12, 12],
    [14, 14, 14],
    [20, 20, 20],
    [16, 16, 16],
    [11, 11, 11],
    [15, 15, 15],
    [12, 12, 13],
  ],
  barColors: ['#EB5757', '#F2C94C', '#61AEFF'],
};
export const stackedBarChartYearData = {
  labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
  data: [
    [12, 12, 12],
    [14, 14, 14],
    [20, 20, 20],
    [16, 16, 16],
    [11, 11, 11],
    [15, 15, 15],
    [12, 12, 13],
  ],
  barColors: ['#EB5757', '#F2C94C', '#61AEFF'],
};

export const userProgressTrackData = [
  {
    trackerTitle: 'Step tracker',
    icon: iconMapping['stepIcon'],
    quantity: '2,386 ',
    totalQuantity: '/ 10,000 Cal',
    progress: 0.4,
  },
  {
    trackerTitle: 'Daily Calories',
    icon: iconMapping['caloriesIcon'],
    quantity: '530 ',
    totalQuantity: '/ 1,500 Cal',
    progress: 0.4,
  },
];

export const userHabitsData = [
  {
    icon: iconMapping['protienImage'],
    habitTitle: 'Eat Protein every meal',
    description:
      'Run through the stretch routine we outlined in week 1 of the...',
    detailText: 'DIET CHART',
  },
  {
    icon: iconMapping['stretchImage'],
    habitTitle: 'Stretch every night',
    description:
      'Run through the stretch routine we outlined in week 1 of the...',
    detailText: 'READ ARTICLE',
  },
];
export const allProgramsData = [
  {
    icon: iconMapping['protienImage'],
    habitTitle: '1. Program for order component',
    description: 'Published',
    detailText: '10 weeks . 5 enrolled',
  },
  {
    icon: iconMapping['stretchImage'],
    habitTitle: 'Archon Testing Week',
    description: 'Published',
    detailText: '4 weeks . 1 enrolled',
  },
  {
    icon: iconMapping['protienImage'],
    habitTitle: '1. Program for order component',
    description: 'Published',
    detailText: '10 weeks . 5 enrolled',
  },
  {
    icon: iconMapping['stretchImage'],
    habitTitle: 'Archon Testing Week',
    description: 'Published',
    detailText: '4 weeks . 1 enrolled',
  },
  {
    icon: iconMapping['protienImage'],
    habitTitle: '1. Program for order component',
    description: 'Published',
    detailText: '10 weeks . 5 enrolled',
  },
  {
    icon: iconMapping['stretchImage'],
    habitTitle: 'Archon Testing Week',
    description: 'Published',
    detailText: '4 weeks . 1 enrolled',
  },
  {
    icon: iconMapping['protienImage'],
    habitTitle: '1. Program for order component',
    description: 'Published',
    detailText: '10 weeks . 5 enrolled',
  },
  {
    icon: iconMapping['stretchImage'],
    habitTitle: 'Archon Testing Week',
    description: 'Published',
    detailText: '4 weeks . 1 enrolled',
  },
];

export const userLessonData = [
  {
    image: iconMapping['protienShakeImage'],
    title: 'The ultimate protein shake',
    description: 'Anyone who’s tried Protein Shakes knows they are a game...',
    detailText: 'READ ARTICLE',
  },
  {
    image: iconMapping['strategicImage'],
    title: 'Strategic stretch for me...',
    description: 'Anyone who’s tried Protein Shakes knows they are a game...',
    detailText: strings.playVideo,
  },
];

export const workoutData = [
  {
    icon: iconMapping['cardioIcon'],
    workoutName: strings.cardio,
  },
  {
    icon: iconMapping['squatIcon'],
    workoutName: strings.squat,
  },
  {
    icon: iconMapping['weightLiftIcon'],
    workoutName: strings.weightlift,
  },
  {
    icon: iconMapping['squatIcon'],
    workoutName: strings.running,
  },
];

export const workoutCalenderData = [
  {
    id: '1',
    workoutName: 'Chest and Triceps',
    status: 'Completed',
    exercise: '3 exercises',
    date: '09',
  },
  {
    id: '2',
    workoutName: 'Back and Biceps',
    status: 'Missed',
    exercise: '4 exercises',
    date: '10',
  },
  {
    id: '3',
    workoutName: '',
    status: '',
    exercise: '',
  },
  {
    id: '4',
    workoutName: '',
    status: '',
    exercise: '',
  },
  {
    id: '5',
    workoutName: 'Trap Bar Deadlift',
    status: 'Completed',
    exercise: '3 exercises',
    date: '13',
  },
  {
    id: '6',
    workoutName: '',
    status: '',
    exercise: '',
  },
  {
    id: '7',
    workoutName: 'Squat, Press, Power Clean',
    status: 'Upcoming',
    exercise: '2 exercises',
    date: '15',
  },
];

export const workoutHistoryData = [
  {
    title: 'Monday, 17 Apr',
    data: [
      {
        workoutName: 'Chest and Triceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
      {
        workoutName: 'Black and Biceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Tuesday, 18 Apr',
    data: [
      {
        workoutName: 'Trap Bar Deadlift',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Wednesday, 19 Apr',
    data: [
      {
        workoutName: 'Squat, Press, Power Clean',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Thursday, 19 Apr',
    data: [
      {
        workoutName: 'Chest and Triceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
];

export const profileWorkoutHistoryData = [
  {
    title: 'Monday, 17 Apr',
    data: [
      {
        workoutName: 'Black and Biceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Tuesday, 18 Apr',
    data: [
      {
        workoutName: 'Squat, Press, Power Clean',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
      {
        workoutName: 'Trap Bar Deadlift',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
];

export const workoutHistoryCalenderData = [
  {
    title: 'Monday, 17 Apr',
    data: [
      {
        workoutName: 'Chest and Triceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Tuesday, 18 Apr',
    data: [
      {
        workoutName: 'Black and Biceps',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Wednesday, 19 Apr',
    data: [
      {
        workoutName: 'Squat, Press, Power Clean',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
  {
    title: 'Thursday, 19 Apr',
    data: [
      {
        workoutName: 'Trap Bar Deadlift',
        time: '30 min',
        weight: '135kg',
        reps: '10 reps',
        exercise: '3 x Squat (Barbell)',
        bestset: '300 lbs x 36 reps',
      },
    ],
  },
];
export const exercisesData = [
  {
    image: iconMapping['womanPushups'],
    title: 'Squats (Barbell)',
    time: '02.25',
    multiplyNum: 4,
  },
  {
    image: iconMapping['womanWeightLift'],
    title: 'Leg extension',
    time: '02.25',
    multiplyNum: 3,
  },
  {
    image: iconMapping['womanFootball'],
    title: 'Flat leg raise',
    time: '02.25',
    multiplyNum: 3,
  },
  {
    image: iconMapping['womanWeightLift'],
    title: 'Standing calf raise',
    time: '02.25',
    multiplyNum: 3,
  },
];

export const workoutDetailsData = [
  {exercise: '1. 250 lb x 5', rm: '292'},
  {exercise: '2. 250 lb x 5', rm: '292'},
  {exercise: '3. 250 lb x 5', rm: '292'},
];

export const workoutColors = [
  Colors.primaryColors.sky,
  Colors.primaryColors.seaGreen,
  Colors.primaryColors.lightPurple,
];

export const excerciseVideoData = [
  {
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
];

export const exerciseDetailPropsData = [
  {
    id: '1',
    reps: '12',
    weight: '100',
  },
  {
    id: '2',
    reps: '12',
    weight: '100',
  },
  {
    id: '3',
    reps: '12',
    weight: '100',
  },
];
export const workoutSurveyData = [
  {
    num: '1',
    status: 'V.Ease',
  },
  {
    num: '2',
    status: 'Ease',
  },
  {
    num: '3',
    status: 'Medium',
  },
  {
    num: '4',
    status: 'Hard',
  },
  {
    num: '5',
    status: 'V.Hard',
  },
];
export const exerciseDetailsCongratsData = [
  {
    excercise: '3 x Squat (Barbell)',
    bestset: '300 lbs x 36 reps',
  },
  {
    excercise: '4 x Squat (Barbell)',
    bestset: '300 lbs x 36 reps',
  },
  {
    excercise: '3 x Overhead Pres...',
    bestset: '300 lbs x 36 reps',
  },
];

export const shareScreenImages = [
  Images.DumbbellDeltLarge,
  Images.DumbbellDeltLarge,
  Images.DumbbellDeltLarge,
  Images.DumbbellDeltLarge,
];
export const videoUrl =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

export const profileCardData = [
  {
    activityIcon: iconMapping['stepIconPrimary'],
    activityName: 'Step Tracker',
    activityCount: '6,386',
    totalQuantity: '10,000',
    activityDetail: 'Steps',
    progress: 0.7,
  },
  {
    activityIcon: iconMapping['nutritionIcon'],
    activityName: 'Nutrition',
    activityCount: '500',
    totalQuantity: '1500',
    activityDetail: 'Cal',
    progress: 0.4,
  },
  {
    activityIcon: iconMapping['weightIconPrimary'],
    activityName: 'Weight',
    activityCount: '124',
    activityDetail: 'lbs',
    progress: 0.5,
  },
  {
    activityIcon: iconMapping['goalsIcon'],
    activityName: 'Goals',
    activityCount: '4',
    activityDetail: 'Active Goal',
  },
  {
    activityIcon: iconMapping['workoutIcon'],
    activityName: 'Workout History',
    activityCount: '3',
    activityDetail: 'Workouts',
  },
  {
    activityIcon: iconMapping['photos'],
    activityName: 'Progress Photos',
    activityCount: '2',
    activityDetail: '',
  },
  {
    activityIcon: iconMapping['exerciseIcon'],
    activityName: 'Exercises History',
    activityCount: '3',
    activityDetail: 'Exercises',
  },
];

export const metricsData = [
  {
    activityName: 'Weight',
    updateDate: 'Updated 6 days ago',
    activityCount: '123',
    activityUnit: 'lb',
  },
  {
    activityName: 'Body Fat',
    updateDate: 'Updated 6 days ago',
    activityCount: '10',
    activityUnit: '%',
  },
  {
    activityName: 'Steps',
    updateDate: 'Updated yesterday',
    activityCount: '',
    activityUnit: '',
  },
];

export const weightList = [
  {
    date: 'Mar 26',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 25',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 24',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 23',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 22',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 21',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 20',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 19',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
  {
    date: 'Mar 18',
    time: '7:26 AM',
    weight: '170.8 lb',
  },
];

export const exerciseHistoryData = [
  {
    activityName: 'Strong 5x5 - Workout B',
    date: '11:28 AM, Tuesday, 18 Apr 2023',
    setPerformed: [
      {set: 'W 75 kg x 6', rm: '87'},
      {set: 'D 75 kg x 6', rm: '81'},
      {set: 'F 75 kg x 6', rm: '83'},
      {set: 'F 75 kg x 6', rm: '91'},
    ],
  },
  {
    activityName: 'Legs',
    date: '11:28 AM, Wednesday, 19 Apr 2023',
    setPerformed: [
      {set: 'W 75 kg x 6', rm: '87'},
      {set: 'D 75 kg x 6', rm: '81'},
      {set: 'F 75 kg x 6', rm: '83'},
      {set: 'F 75 kg x 6', rm: '91'},
    ],
  },
  {
    activityName: 'Chin Up',
    date: '10:32 AM, Monday, 10 Apr 2023',
    setPerformed: [
      {set: 'W 75 kg x 6', rm: '87'},
      {set: 'D 75 kg x 6', rm: '81'},
      {set: 'F 75 kg x 6', rm: '83'},
      {set: 'F 75 kg x 6', rm: '91'},
    ],
  },
];
