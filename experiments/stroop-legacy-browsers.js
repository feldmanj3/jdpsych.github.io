/*************** 
 * Stroop Test *
 ***************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'stroop';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(disclaimerRoutineBegin());
flowScheduler.add(disclaimerRoutineEachFrame());
flowScheduler.add(disclaimerRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(practice_instructionsRoutineBegin());
flowScheduler.add(practice_instructionsRoutineEachFrame());
flowScheduler.add(practice_instructionsRoutineEnd());
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin, practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);
flowScheduler.add(experimental_instructionsRoutineBegin());
flowScheduler.add(experimental_instructionsRoutineEachFrame());
flowScheduler.add(experimental_instructionsRoutineEnd());
const mixed_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(mixed_loopLoopBegin, mixed_loopLoopScheduler);
flowScheduler.add(mixed_loopLoopScheduler);
flowScheduler.add(mixed_loopLoopEnd);
const AB1_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AB1_loopLoopBegin, AB1_loopLoopScheduler);
flowScheduler.add(AB1_loopLoopScheduler);
flowScheduler.add(AB1_loopLoopEnd);
const AB2_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(AB2_loopLoopBegin, AB2_loopLoopScheduler);
flowScheduler.add(AB2_loopLoopScheduler);
flowScheduler.add(AB2_loopLoopEnd);
flowScheduler.add(conclusionRoutineBegin());
flowScheduler.add(conclusionRoutineEachFrame());
flowScheduler.add(conclusionRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'strooplist_practice.xlsx', 'path': 'strooplist_practice.xlsx'},
    {'name': 'strooplist.xlsx', 'path': 'strooplist.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var disclaimerClock;
var experimental_trials;
var condition;
var coin_flip;
var text_10;
var key_resp_11;
var instructionsClock;
var instructions_welcome;
var key_resp_3;
var practice_instructionsClock;
var practice_instructions2;
var end_practice_instructions;
var practiceClock;
var practice_text;
var key_resp_2;
var experimental_instructionsClock;
var instructions2;
var key_resp_4;
var mixed_conditionClock;
var condition_text;
var key_resp;
var mixed_pauseClock;
var text_4;
var key_resp_5;
var AB1_neutralClock;
var text_7;
var key_resp_8;
var AB1_pauseClock;
var key_resp_7;
var text_6;
var AB2_negativeClock;
var text_8;
var key_resp_9;
var AB2_pauseClock;
var text_9;
var key_resp_10;
var conclusionClock;
var text_2;
var key_resp_6;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "disclaimer"
  disclaimerClock = new util.Clock();
  experimental_trials = 0;
  condition = "";
  coin_flip = Math.random();
  
  // pick one condition randomly
  if (coin_flip > .5) {
      condition = "A";
  } else {
      condition = "B";
  };
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'NOTE FROM JOHN:\n\nThe following experiment is a replication of the Emotional Stroop Task. This version features lexical stimuli (neutral and negative words), matched word list (in terms of frequency and valence), built-in random assignment (mixed vs. counter-balanced — neutral then emotional block), a training block of 25 trials, four experimental blocks of 20 trials, and a 500ms inter-trial delay.\n\nThe purpose of this replication was to 1) familiarize myself with PsychoPy and PsychoJS, and 2) adhere to replication guidelines specifically for the Emotional Stroop Task (Ben-Haim et al., 2016). If you are interested, I discuss the recreation process and lessons further on my website: johndejesus.com/#experiments\n\n\nPlease press [ENTER] to proceed.\n\n\n\nReferences:\n\nBen-Haim, M. S., Williams, P., Howard, Z., Mama, Y., Eidels, A., & Algom, D. (2016). The Emotional Stroop Task: Assessing Cognitive Performance under Exposure to Emotional Content. Journal of visualized experiments : JoVE, (112), 53720.\n\nScott, G. G., O’Donnell, P. J., Leuthold, H., & Sereno, S. C. (2009). Early emotion word processing: Evidence from event-related potentials. Biological psychology, 80(1), 95-104.\n\nKahan, T. A., & Hely, C. D. (2008). The role of valence and frequency in the emotional Stroop task. Psychonomic bulletin & review, 15(5), 956-960.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_welcome',
    text: 'Welcome to the Emotional Stroop Task! \n\nThe purpose of this task is to measure your accuracy and delay in choosing the correct colour of the word.\n\nOnce you’ve agreed and signed the written informed consent, please press [ENTER].',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions"
  practice_instructionsClock = new util.Clock();
  practice_instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_instructions2',
    text: 'Instructions:\n\nA series of words will display in one of four colours: Red, Yellow, Green, and Blue. \n\nWords and colour combinations are randomized.\n\nYour goal is to press the corresponding first letter of the word’s COLOUR. For example, if the word is “BUCKET” and was in the color RED, you would press the [R] key.\n\nLet’s start with a practice session. Once you’re ready to proceed, press [ENTER].\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  end_practice_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  practice_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "experimental_instructions"
  experimental_instructionsClock = new util.Clock();
  instructions2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions2',
    text: 'GREAT JOB!\n\nYou’ve completed the practice block!\n\nNow for the actual experiment. Remember, try your best to press the correct corresponding first letter for the colour of the word.\n\nFor example, if ‘SOAP’ was colour BLUE, you would press [B].\n\nOnce you’re ready to proceed, press [ENTER].',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mixed_condition"
  mixed_conditionClock = new util.Clock();
  condition_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'condition_text',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mixed_pause"
  mixed_pauseClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Please take a break if you find it necessary. We would appreciate it if you took no longer than a one-minute pause.\n\nOnce you’re ready to continue, press [ENTER].',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "AB1_neutral"
  AB1_neutralClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "AB1_pause"
  AB1_pauseClock = new util.Clock();
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Please take a break if you find it necessary. We would appreciate it if you took no longer than a one-minute pause.\n\nOnce you’re ready to continue, press [ENTER].',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "AB2_negative"
  AB2_negativeClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "AB2_pause"
  AB2_pauseClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Please take a break if you find it necessary. We would appreciate it if you took no longer than a one-minute pause.\n\nOnce you’re ready to continue, press [ENTER].',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "conclusion"
  conclusionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Thank you for participating in our online study.\n\nA Research Assistant will debrief you shortly and provide you with your monetary compensation.\n\nPlease press [ENTER] to end the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_11_allKeys;
var disclaimerComponents;
function disclaimerRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'disclaimer'-------
    t = 0;
    disclaimerClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    disclaimerComponents = [];
    disclaimerComponents.push(text_10);
    disclaimerComponents.push(key_resp_11);
    
    disclaimerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function disclaimerRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'disclaimer'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = disclaimerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 1 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    disclaimerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function disclaimerRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'disclaimer'-------
    disclaimerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "disclaimer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_welcome);
    instructionsComponents.push(key_resp_3);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_welcome* updates
    if (t >= 0.0 && instructions_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_welcome.tStart = t;  // (not accounting for frame time here)
      instructions_welcome.frameNStart = frameN;  // exact frame index
      
      instructions_welcome.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _end_practice_instructions_allKeys;
var practice_instructionsComponents;
function practice_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_instructions'-------
    t = 0;
    practice_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    end_practice_instructions.keys = undefined;
    end_practice_instructions.rt = undefined;
    _end_practice_instructions_allKeys = [];
    // keep track of which components have finished
    practice_instructionsComponents = [];
    practice_instructionsComponents.push(practice_instructions2);
    practice_instructionsComponents.push(end_practice_instructions);
    
    practice_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function practice_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_instructions2* updates
    if (t >= 0.0 && practice_instructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_instructions2.tStart = t;  // (not accounting for frame time here)
      practice_instructions2.frameNStart = frameN;  // exact frame index
      
      practice_instructions2.setAutoDraw(true);
    }

    
    // *end_practice_instructions* updates
    if (t >= 0.5 && end_practice_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_practice_instructions.tStart = t;  // (not accounting for frame time here)
      end_practice_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_practice_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_practice_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_practice_instructions.clearEvents(); });
    }

    if (end_practice_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_practice_instructions.getKeys({keyList: ['return'], waitRelease: false});
      _end_practice_instructions_allKeys = _end_practice_instructions_allKeys.concat(theseKeys);
      if (_end_practice_instructions_allKeys.length > 0) {
        end_practice_instructions.keys = _end_practice_instructions_allKeys[_end_practice_instructions_allKeys.length - 1].name;  // just the last key pressed
        end_practice_instructions.rt = _end_practice_instructions_allKeys[_end_practice_instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practice_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_instructions'-------
    practice_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practice_loop;
var currentLoop;
function practice_loopLoopBegin(practice_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'strooplist_practice.xlsx',
    seed: undefined, name: 'practice_loop'
  });
  psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
  currentLoop = practice_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_loop.forEach(function() {
    const snapshot = practice_loop.getSnapshot();

    practice_loopLoopScheduler.add(importConditions(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineBegin(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineEachFrame(snapshot));
    practice_loopLoopScheduler.add(practiceRoutineEnd(snapshot));
    practice_loopLoopScheduler.add(endLoopIteration(practice_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practice_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_loop);

  return Scheduler.Event.NEXT;
}


var mixed_loop;
function mixed_loopLoopBegin(mixed_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  mixed_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'strooplist.xlsx', '1:80'),
    seed: undefined, name: 'mixed_loop'
  });
  psychoJS.experiment.addLoop(mixed_loop); // add the loop to the experiment
  currentLoop = mixed_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  mixed_loop.forEach(function() {
    const snapshot = mixed_loop.getSnapshot();

    mixed_loopLoopScheduler.add(importConditions(snapshot));
    mixed_loopLoopScheduler.add(mixed_conditionRoutineBegin(snapshot));
    mixed_loopLoopScheduler.add(mixed_conditionRoutineEachFrame(snapshot));
    mixed_loopLoopScheduler.add(mixed_conditionRoutineEnd(snapshot));
    mixed_loopLoopScheduler.add(mixed_pauseRoutineBegin(snapshot));
    mixed_loopLoopScheduler.add(mixed_pauseRoutineEachFrame(snapshot));
    mixed_loopLoopScheduler.add(mixed_pauseRoutineEnd(snapshot));
    mixed_loopLoopScheduler.add(endLoopIteration(mixed_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function mixed_loopLoopEnd() {
  psychoJS.experiment.removeLoop(mixed_loop);

  return Scheduler.Event.NEXT;
}


var AB1_loop;
function AB1_loopLoopBegin(AB1_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  AB1_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'strooplist.xlsx', '41:82'),
    seed: undefined, name: 'AB1_loop'
  });
  psychoJS.experiment.addLoop(AB1_loop); // add the loop to the experiment
  currentLoop = AB1_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  AB1_loop.forEach(function() {
    const snapshot = AB1_loop.getSnapshot();

    AB1_loopLoopScheduler.add(importConditions(snapshot));
    AB1_loopLoopScheduler.add(AB1_neutralRoutineBegin(snapshot));
    AB1_loopLoopScheduler.add(AB1_neutralRoutineEachFrame(snapshot));
    AB1_loopLoopScheduler.add(AB1_neutralRoutineEnd(snapshot));
    AB1_loopLoopScheduler.add(AB1_pauseRoutineBegin(snapshot));
    AB1_loopLoopScheduler.add(AB1_pauseRoutineEachFrame(snapshot));
    AB1_loopLoopScheduler.add(AB1_pauseRoutineEnd(snapshot));
    AB1_loopLoopScheduler.add(endLoopIteration(AB1_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function AB1_loopLoopEnd() {
  psychoJS.experiment.removeLoop(AB1_loop);

  return Scheduler.Event.NEXT;
}


var AB2_loop;
function AB2_loopLoopBegin(AB2_loopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  AB2_loop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'strooplist.xlsx', '0:41'),
    seed: undefined, name: 'AB2_loop'
  });
  psychoJS.experiment.addLoop(AB2_loop); // add the loop to the experiment
  currentLoop = AB2_loop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  AB2_loop.forEach(function() {
    const snapshot = AB2_loop.getSnapshot();

    AB2_loopLoopScheduler.add(importConditions(snapshot));
    AB2_loopLoopScheduler.add(AB2_negativeRoutineBegin(snapshot));
    AB2_loopLoopScheduler.add(AB2_negativeRoutineEachFrame(snapshot));
    AB2_loopLoopScheduler.add(AB2_negativeRoutineEnd(snapshot));
    AB2_loopLoopScheduler.add(AB2_pauseRoutineBegin(snapshot));
    AB2_loopLoopScheduler.add(AB2_pauseRoutineEachFrame(snapshot));
    AB2_loopLoopScheduler.add(AB2_pauseRoutineEnd(snapshot));
    AB2_loopLoopScheduler.add(endLoopIteration(AB2_loopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function AB2_loopLoopEnd() {
  psychoJS.experiment.removeLoop(AB2_loop);

  return Scheduler.Event.NEXT;
}


var _key_resp_2_allKeys;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practice_text.setColor(new util.Color(colour));
    practice_text.setText(word);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(practice_text);
    practiceComponents.push(key_resp_2);
    
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice_text* updates
    if (t >= 0.5 && practice_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice_text.tStart = t;  // (not accounting for frame time here)
      practice_text.frameNStart = frameN;  // exact frame index
      
      practice_text.setAutoDraw(true);
    }

    frameRemains = 0.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practice_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practice_text.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.5 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['r', 'g', 'y', 'b'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice'-------
    practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var experimental_instructionsComponents;
function experimental_instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'experimental_instructions'-------
    t = 0;
    experimental_instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    console.log(condition);
    // keep track of which components have finished
    experimental_instructionsComponents = [];
    experimental_instructionsComponents.push(instructions2);
    experimental_instructionsComponents.push(key_resp_4);
    
    experimental_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function experimental_instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'experimental_instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = experimental_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions2* updates
    if (t >= 0.5 && instructions2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions2.tStart = t;  // (not accounting for frame time here)
      instructions2.frameNStart = frameN;  // exact frame index
      
      instructions2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    experimental_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimental_instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'experimental_instructions'-------
    experimental_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "experimental_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var mixed_conditionComponents;
function mixed_conditionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'mixed_condition'-------
    t = 0;
    mixed_conditionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = true;
    }
    
    condition_text.setColor(new util.Color(colour));
    condition_text.setText(word);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    mixed_conditionComponents = [];
    mixed_conditionComponents.push(condition_text);
    mixed_conditionComponents.push(key_resp);
    
    mixed_conditionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function mixed_conditionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'mixed_condition'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = mixed_conditionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = true;
    }
    
    
    // *condition_text* updates
    if (t >= 0.5 && condition_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      condition_text.tStart = t;  // (not accounting for frame time here)
      condition_text.frameNStart = frameN;  // exact frame index
      
      condition_text.setAutoDraw(true);
    }

    frameRemains = 0.5 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (condition_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      condition_text.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['r', 'b', 'g', 'y'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == constAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    mixed_conditionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mixed_conditionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'mixed_condition'-------
    mixed_conditionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((condition === "A")) {
        experimental_trials++;
        console.log(experimental_trials);
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(constAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "mixed_condition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var mixed_pauseComponents;
function mixed_pauseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'mixed_pause'-------
    t = 0;
    mixed_pauseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    mixed_pauseComponents = [];
    mixed_pauseComponents.push(text_4);
    mixed_pauseComponents.push(key_resp_5);
    
    mixed_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function mixed_pauseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'mixed_pause'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = mixed_pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((experimental_trials === 20)) {
        continueRoutine = true;
    }
    if ((experimental_trials === 40)) {
        continueRoutine = true;
    }
    if ((experimental_trials === 60)) {
        continueRoutine = true;
    }
    
    
    // *text_4* updates
    if (t >= 0.5 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    mixed_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function mixed_pauseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'mixed_pause'-------
    mixed_pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "mixed_pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var AB1_neutralComponents;
function AB1_neutralRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'AB1_neutral'-------
    t = 0;
    AB1_neutralClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = false;
    }
    if ((condition === "B")) {
        continueRoutine = true;
    }
    
    text_7.setColor(new util.Color(colour));
    text_7.setText(word);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    AB1_neutralComponents = [];
    AB1_neutralComponents.push(text_7);
    AB1_neutralComponents.push(key_resp_8);
    
    AB1_neutralComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function AB1_neutralRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'AB1_neutral'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AB1_neutralClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = false;
    }
    if ((condition === "B")) {
        continueRoutine = true;
    }
    
    
    // *text_7* updates
    if (t >= 0.5 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *key_resp_8* updates
    if (t >= 0.5 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['r', 'g', 'b', 'y'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AB1_neutralComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AB1_neutralRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'AB1_neutral'-------
    AB1_neutralComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((condition === "B")) {
        experimental_trials++;
        console.log(experimental_trials);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "AB1_neutral" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var AB1_pauseComponents;
function AB1_pauseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'AB1_pause'-------
    t = 0;
    AB1_pauseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    AB1_pauseComponents = [];
    AB1_pauseComponents.push(key_resp_7);
    AB1_pauseComponents.push(text_6);
    
    AB1_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function AB1_pauseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'AB1_pause'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AB1_pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((experimental_trials === 20)) {
        continueRoutine = true;
    }
    if ((experimental_trials === 39)) {
        continueRoutine = true;
    }
    
    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_6* updates
    if (t >= 0.5 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AB1_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AB1_pauseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'AB1_pause'-------
    AB1_pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "AB1_pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var AB2_negativeComponents;
function AB2_negativeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'AB2_negative'-------
    t = 0;
    AB2_negativeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = false;
    }
    if ((condition === "B")) {
        continueRoutine = true;
    }
    
    text_8.setColor(new util.Color(colour));
    text_8.setText(word);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    AB2_negativeComponents = [];
    AB2_negativeComponents.push(text_8);
    AB2_negativeComponents.push(key_resp_9);
    
    AB2_negativeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function AB2_negativeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'AB2_negative'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AB2_negativeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((condition === "A")) {
        continueRoutine = false;
    }
    if ((condition === "B")) {
        continueRoutine = true;
    }
    
    
    // *text_8* updates
    if (t >= 0.5 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    frameRemains = 0.5 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    // *key_resp_9* updates
    if (t >= 0.5 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['r', 'g', 'y', 'b'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AB2_negativeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AB2_negativeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'AB2_negative'-------
    AB2_negativeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((condition === "B")) {
        experimental_trials++;
        console.log(experimental_trials);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "AB2_negative" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var AB2_pauseComponents;
function AB2_pauseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'AB2_pause'-------
    t = 0;
    AB2_pauseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    AB2_pauseComponents = [];
    AB2_pauseComponents.push(text_9);
    AB2_pauseComponents.push(key_resp_10);
    
    AB2_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function AB2_pauseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'AB2_pause'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = AB2_pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    continueRoutine = false;
    if ((experimental_trials === 60)) {
        continueRoutine = true;
    }
    
    
    // *text_9* updates
    if (t >= 0.5 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    AB2_pauseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AB2_pauseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'AB2_pause'-------
    AB2_pauseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "AB2_pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var conclusionComponents;
function conclusionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'conclusion'-------
    t = 0;
    conclusionClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    conclusionComponents = [];
    conclusionComponents.push(text_2);
    conclusionComponents.push(key_resp_6);
    
    conclusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function conclusionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'conclusion'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = conclusionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.5 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['return'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    conclusionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function conclusionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'conclusion'-------
    conclusionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "conclusion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
