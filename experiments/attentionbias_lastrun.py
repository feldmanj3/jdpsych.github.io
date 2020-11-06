#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.4),
    on Thu Nov  5 04:51:18 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.4'
expName = 'attentionbias'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/john/Documents/GitHub/jdpsych.github.io/experiments/attentionbias_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "disclaimer"
disclaimerClock = core.Clock()
key_resp_3 = keyboard.Keyboard()
text = visual.TextStim(win=win, name='text',
    text='NOTE FROM JOHN:\n\nThe follow is an attention-bias modification (dot probe and visual dot probe task, in this case) program based on the design by Amir et al. (2009). \n\nThis is a demo version with one training and one experimental block.\n\nThis experiment has a training block (16 trials), where lexical stimuli is used to avert training carryover effects for the visual stimuli during the experimental block (20 trials). Participants are randomized into either an active or control condition. In the active condition, 80% of trials show neutral-negative and 20% of trials show neutral-neutral. All active trials replace the neutral image with a probe. In the control condition, half of the 80% of trials replace the negative image. 500ms is the global delay for inter-trial delay, duration of fixation cross, and duration of stimuli presentation. Nonwithstanding the heterogeneity in ABM and the psychometric concerns, this recreation was done for educational purposes. \n\nPress [ENTER] to proceed.\n\n\nReferences:\n\nAmir, N., Beard, C., Taylor, C. T., Klumpp, H., Elias, J., Burns, M., & Chen, X. (2009). Attention training in individuals with generalized social phobia: A randomized controlled trial. Journal of consulting and clinical psychology, 77(5), 961–973. https://doi.org/10.1037/a0016685',
    font='Arial',
    pos=(0, 0), height=0.025, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
experimental_trials = 0;
condition = "";
coin_flip = Math.random();

// pick one condition randomly
if (coin_flip > .5) {
    condition = "A";
} else {
    condition = "B";
};


# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Welcome to the Attention-Bias Modification Task!\n\nThe purpose of this experiment is to measure how quick you are at pressing the correct button following the presentation of two stimulus.\n\nOnce you’ve signed the written informed consent and are ready, please press [ENTER] to proceed.\n\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "training_instructions"
training_instructionsClock = core.Clock()
text_3 = visual.TextStim(win=win, name='text_3',
    text='INSTRUCTIONS (PRACTICE)\n\nIn this experiment, a cross will briefly appear in the center of the screen, followed by two words or pictures. One will be at the top and one will be at the bottom. These words/pictures will also only show up momentarily — they will be replaced with a dot.\n\nYour job is to press the keyboard button [UP] or [DOWN] depending on where the cross is.\n\nLet’s try a few practice runs. Press [ENTER] to proceed.\n\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "training_block"
training_blockClock = core.Clock()
fixation_cross_training = visual.TextStim(win=win, name='fixation_cross_training',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
top_text = visual.TextStim(win=win, name='top_text',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
bottom_text = visual.TextStim(win=win, name='bottom_text',
    text='default text',
    font='Arial',
    pos=[0,0], height=0.1, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
probe_training = visual.TextStim(win=win, name='probe_training',
    text='.',
    font='Arial',
    pos=[0,0], height=0.15, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_2 = keyboard.Keyboard()

# Initialize components for Routine "experimental_instructions"
experimental_instructionsClock = core.Clock()
text_4 = visual.TextStim(win=win, name='text_4',
    text='Great work!\n\nNow for the actual experiment. In the next set of trials, you will notice that instead of words, you will see pictures. \n\nYour job remains the same: Press [UP] or [DOWN] depending on where the dot replaces the image.\n\nPress [ENTER] to begin.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "active_condition"
active_conditionClock = core.Clock()
probe = visual.TextStim(win=win, name='probe',
    text='.',
    font='Arial',
    pos=[0,0], height=0.15, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
top_image = visual.ImageStim(
    win=win,
    name='top_image', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
bottom_image = visual.ImageStim(
    win=win,
    name='bottom_image', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
fixation_cross = visual.TextStim(win=win, name='fixation_cross',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp = keyboard.Keyboard()

# Initialize components for Routine "control_condition"
control_conditionClock = core.Clock()
fixation_cross_control = visual.TextStim(win=win, name='fixation_cross_control',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
top_image_control = visual.ImageStim(
    win=win,
    name='top_image_control', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
bot_image_control = visual.ImageStim(
    win=win,
    name='bot_image_control', 
    image='sin', mask=None,
    ori=0, pos=[0,0], size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
control_probe = visual.TextStim(win=win, name='control_probe',
    text='.',
    font='Arial',
    pos=[0,0], height=0.15, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
key_resp_8 = keyboard.Keyboard()

# Initialize components for Routine "conclusion"
conclusionClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Well done, the experiment is now over!\n\nThank you for your participation. A research assistant will be in shortly to debrief you and provide you with your monetary compensation for your time.\n\nPlease press [ENTER] to exit the experiment.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_7 = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "disclaimer"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
disclaimerComponents = [key_resp_3, text]
for thisComponent in disclaimerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
disclaimerClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "disclaimer"-------
while continueRoutine:
    # get current time
    t = disclaimerClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=disclaimerClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in disclaimerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "disclaimer"-------
for thisComponent in disclaimerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# the Routine "disclaimer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
instructionsComponents = [text_2, key_resp_4]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "training_instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
training_instructionsComponents = [text_3, key_resp_5]
for thisComponent in training_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
training_instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "training_instructions"-------
while continueRoutine:
    # get current time
    t = training_instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=training_instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in training_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "training_instructions"-------
for thisComponent in training_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_3.started', text_3.tStartRefresh)
thisExp.addData('text_3.stopped', text_3.tStopRefresh)
# the Routine "training_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
training_loop = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('dotprobe_training.xlsx'),
    seed=None, name='training_loop')
thisExp.addLoop(training_loop)  # add the loop to the experiment
thisTraining_loop = training_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTraining_loop.rgb)
if thisTraining_loop != None:
    for paramName in thisTraining_loop:
        exec('{} = thisTraining_loop[paramName]'.format(paramName))

for thisTraining_loop in training_loop:
    currentLoop = training_loop
    # abbreviate parameter names if possible (e.g. rgb = thisTraining_loop.rgb)
    if thisTraining_loop != None:
        for paramName in thisTraining_loop:
            exec('{} = thisTraining_loop[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "training_block"-------
    continueRoutine = True
    # update component parameters for each repeat
    top_text.setPos([top_word_position_x, top_word_position_y])
    top_text.setText(top_word)
    bottom_text.setPos([bottom_word_position_x, bottom_word_position_y])
    bottom_text.setText(bottom_word)
    probe_training.setPos([training_probe_position_x, training_probe_position_y])
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # keep track of which components have finished
    training_blockComponents = [fixation_cross_training, top_text, bottom_text, probe_training, key_resp_2]
    for thisComponent in training_blockComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    training_blockClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "training_block"-------
    while continueRoutine:
        # get current time
        t = training_blockClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=training_blockClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_cross_training* updates
        if fixation_cross_training.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            fixation_cross_training.frameNStart = frameN  # exact frame index
            fixation_cross_training.tStart = t  # local t and not account for scr refresh
            fixation_cross_training.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_cross_training, 'tStartRefresh')  # time at next scr refresh
            fixation_cross_training.setAutoDraw(True)
        if fixation_cross_training.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_cross_training.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_cross_training.tStop = t  # not accounting for scr refresh
                fixation_cross_training.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_cross_training, 'tStopRefresh')  # time at next scr refresh
                fixation_cross_training.setAutoDraw(False)
        
        # *top_text* updates
        if top_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            top_text.frameNStart = frameN  # exact frame index
            top_text.tStart = t  # local t and not account for scr refresh
            top_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(top_text, 'tStartRefresh')  # time at next scr refresh
            top_text.setAutoDraw(True)
        if top_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > top_text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                top_text.tStop = t  # not accounting for scr refresh
                top_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(top_text, 'tStopRefresh')  # time at next scr refresh
                top_text.setAutoDraw(False)
        
        # *bottom_text* updates
        if bottom_text.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            bottom_text.frameNStart = frameN  # exact frame index
            bottom_text.tStart = t  # local t and not account for scr refresh
            bottom_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bottom_text, 'tStartRefresh')  # time at next scr refresh
            bottom_text.setAutoDraw(True)
        if bottom_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > bottom_text.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                bottom_text.tStop = t  # not accounting for scr refresh
                bottom_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(bottom_text, 'tStopRefresh')  # time at next scr refresh
                bottom_text.setAutoDraw(False)
        
        # *probe_training* updates
        if probe_training.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            probe_training.frameNStart = frameN  # exact frame index
            probe_training.tStart = t  # local t and not account for scr refresh
            probe_training.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(probe_training, 'tStartRefresh')  # time at next scr refresh
            probe_training.setAutoDraw(True)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in training_blockComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "training_block"-------
    for thisComponent in training_blockComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    training_loop.addData('fixation_cross_training.started', fixation_cross_training.tStartRefresh)
    training_loop.addData('fixation_cross_training.stopped', fixation_cross_training.tStopRefresh)
    training_loop.addData('top_text.started', top_text.tStartRefresh)
    training_loop.addData('top_text.stopped', top_text.tStopRefresh)
    training_loop.addData('bottom_text.started', bottom_text.tStartRefresh)
    training_loop.addData('bottom_text.stopped', bottom_text.tStopRefresh)
    training_loop.addData('probe_training.started', probe_training.tStartRefresh)
    training_loop.addData('probe_training.stopped', probe_training.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    training_loop.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        training_loop.addData('key_resp_2.rt', key_resp_2.rt)
    training_loop.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    training_loop.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    # the Routine "training_block" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'training_loop'


# ------Prepare to start Routine "experimental_instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
experimental_instructionsComponents = [text_4, key_resp_6]
for thisComponent in experimental_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
experimental_instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "experimental_instructions"-------
while continueRoutine:
    # get current time
    t = experimental_instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=experimental_instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_4* updates
    if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_4.frameNStart = frameN  # exact frame index
        text_4.tStart = t  # local t and not account for scr refresh
        text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
        text_4.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in experimental_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "experimental_instructions"-------
for thisComponent in experimental_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_4.started', text_4.tStartRefresh)
thisExp.addData('text_4.stopped', text_4.tStopRefresh)
# the Routine "experimental_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('dotprobe.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "active_condition"-------
    continueRoutine = True
    # update component parameters for each repeat
    probe.setPos([probe_position_x, probe_position_y])
    top_image.setPos([image1_position_x, image1_position_y])
    top_image.setImage(image1)
    bottom_image.setPos([image2_position_x, image2_position_y])
    bottom_image.setImage(image2)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    active_conditionComponents = [probe, top_image, bottom_image, fixation_cross, key_resp]
    for thisComponent in active_conditionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    active_conditionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "active_condition"-------
    while continueRoutine:
        # get current time
        t = active_conditionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=active_conditionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *probe* updates
        if probe.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            probe.frameNStart = frameN  # exact frame index
            probe.tStart = t  # local t and not account for scr refresh
            probe.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(probe, 'tStartRefresh')  # time at next scr refresh
            probe.setAutoDraw(True)
        
        # *top_image* updates
        if top_image.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            top_image.frameNStart = frameN  # exact frame index
            top_image.tStart = t  # local t and not account for scr refresh
            top_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(top_image, 'tStartRefresh')  # time at next scr refresh
            top_image.setAutoDraw(True)
        if top_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > top_image.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                top_image.tStop = t  # not accounting for scr refresh
                top_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(top_image, 'tStopRefresh')  # time at next scr refresh
                top_image.setAutoDraw(False)
        
        # *bottom_image* updates
        if bottom_image.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            bottom_image.frameNStart = frameN  # exact frame index
            bottom_image.tStart = t  # local t and not account for scr refresh
            bottom_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bottom_image, 'tStartRefresh')  # time at next scr refresh
            bottom_image.setAutoDraw(True)
        if bottom_image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > bottom_image.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                bottom_image.tStop = t  # not accounting for scr refresh
                bottom_image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(bottom_image, 'tStopRefresh')  # time at next scr refresh
                bottom_image.setAutoDraw(False)
        
        # *fixation_cross* updates
        if fixation_cross.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            fixation_cross.frameNStart = frameN  # exact frame index
            fixation_cross.tStart = t  # local t and not account for scr refresh
            fixation_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_cross, 'tStartRefresh')  # time at next scr refresh
            fixation_cross.setAutoDraw(True)
        if fixation_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_cross.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_cross.tStop = t  # not accounting for scr refresh
                fixation_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_cross, 'tStopRefresh')  # time at next scr refresh
                fixation_cross.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in active_conditionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "active_condition"-------
    for thisComponent in active_conditionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('probe.started', probe.tStartRefresh)
    trials.addData('probe.stopped', probe.tStopRefresh)
    trials.addData('top_image.started', top_image.tStartRefresh)
    trials.addData('top_image.stopped', top_image.tStopRefresh)
    trials.addData('bottom_image.started', bottom_image.tStartRefresh)
    trials.addData('bottom_image.stopped', bottom_image.tStopRefresh)
    trials.addData('fixation_cross.started', fixation_cross.tStartRefresh)
    trials.addData('fixation_cross.stopped', fixation_cross.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    trials.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        trials.addData('key_resp.rt', key_resp.rt)
    trials.addData('key_resp.started', key_resp.tStartRefresh)
    trials.addData('key_resp.stopped', key_resp.tStopRefresh)
    # the Routine "active_condition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('dotprobe_control.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "control_condition"-------
    continueRoutine = True
    # update component parameters for each repeat
    top_image_control.setPos([image1_position_x, image1_position_y])
    top_image_control.setImage(image1)
    bot_image_control.setPos([image2_position_x, image2_position_y])
    bot_image_control.setImage(image2)
    control_probe.setPos([probe_position_x, probe_position_y])
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    # keep track of which components have finished
    control_conditionComponents = [fixation_cross_control, top_image_control, bot_image_control, control_probe, key_resp_8]
    for thisComponent in control_conditionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    control_conditionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "control_condition"-------
    while continueRoutine:
        # get current time
        t = control_conditionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=control_conditionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fixation_cross_control* updates
        if fixation_cross_control.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            fixation_cross_control.frameNStart = frameN  # exact frame index
            fixation_cross_control.tStart = t  # local t and not account for scr refresh
            fixation_cross_control.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fixation_cross_control, 'tStartRefresh')  # time at next scr refresh
            fixation_cross_control.setAutoDraw(True)
        if fixation_cross_control.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fixation_cross_control.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                fixation_cross_control.tStop = t  # not accounting for scr refresh
                fixation_cross_control.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fixation_cross_control, 'tStopRefresh')  # time at next scr refresh
                fixation_cross_control.setAutoDraw(False)
        
        # *top_image_control* updates
        if top_image_control.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            top_image_control.frameNStart = frameN  # exact frame index
            top_image_control.tStart = t  # local t and not account for scr refresh
            top_image_control.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(top_image_control, 'tStartRefresh')  # time at next scr refresh
            top_image_control.setAutoDraw(True)
        if top_image_control.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > top_image_control.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                top_image_control.tStop = t  # not accounting for scr refresh
                top_image_control.frameNStop = frameN  # exact frame index
                win.timeOnFlip(top_image_control, 'tStopRefresh')  # time at next scr refresh
                top_image_control.setAutoDraw(False)
        
        # *bot_image_control* updates
        if bot_image_control.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            bot_image_control.frameNStart = frameN  # exact frame index
            bot_image_control.tStart = t  # local t and not account for scr refresh
            bot_image_control.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(bot_image_control, 'tStartRefresh')  # time at next scr refresh
            bot_image_control.setAutoDraw(True)
        if bot_image_control.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > bot_image_control.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                bot_image_control.tStop = t  # not accounting for scr refresh
                bot_image_control.frameNStop = frameN  # exact frame index
                win.timeOnFlip(bot_image_control, 'tStopRefresh')  # time at next scr refresh
                bot_image_control.setAutoDraw(False)
        
        # *control_probe* updates
        if control_probe.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            control_probe.frameNStart = frameN  # exact frame index
            control_probe.tStart = t  # local t and not account for scr refresh
            control_probe.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(control_probe, 'tStartRefresh')  # time at next scr refresh
            control_probe.setAutoDraw(True)
        
        # *key_resp_8* updates
        waitOnFlip = False
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 1.5-frameTolerance:
            # keep track of start time/frame for later
            key_resp_8.frameNStart = frameN  # exact frame index
            key_resp_8.tStart = t  # local t and not account for scr refresh
            key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
            key_resp_8.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_8.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_8.getKeys(keyList=['up', 'down'], waitRelease=False)
            _key_resp_8_allKeys.extend(theseKeys)
            if len(_key_resp_8_allKeys):
                key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
                key_resp_8.rt = _key_resp_8_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in control_conditionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "control_condition"-------
    for thisComponent in control_conditionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('fixation_cross_control.started', fixation_cross_control.tStartRefresh)
    trials_2.addData('fixation_cross_control.stopped', fixation_cross_control.tStopRefresh)
    trials_2.addData('top_image_control.started', top_image_control.tStartRefresh)
    trials_2.addData('top_image_control.stopped', top_image_control.tStopRefresh)
    trials_2.addData('bot_image_control.started', bot_image_control.tStartRefresh)
    trials_2.addData('bot_image_control.stopped', bot_image_control.tStopRefresh)
    trials_2.addData('control_probe.started', control_probe.tStartRefresh)
    trials_2.addData('control_probe.stopped', control_probe.tStopRefresh)
    # check responses
    if key_resp_8.keys in ['', [], None]:  # No response was made
        key_resp_8.keys = None
    trials_2.addData('key_resp_8.keys',key_resp_8.keys)
    if key_resp_8.keys != None:  # we had a response
        trials_2.addData('key_resp_8.rt', key_resp_8.rt)
    trials_2.addData('key_resp_8.started', key_resp_8.tStartRefresh)
    trials_2.addData('key_resp_8.stopped', key_resp_8.tStopRefresh)
    # the Routine "control_condition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_2'


# ------Prepare to start Routine "conclusion"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_7.keys = []
key_resp_7.rt = []
_key_resp_7_allKeys = []
# keep track of which components have finished
conclusionComponents = [text_5, key_resp_7]
for thisComponent in conclusionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
conclusionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "conclusion"-------
while continueRoutine:
    # get current time
    t = conclusionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=conclusionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    
    # *key_resp_7* updates
    waitOnFlip = False
    if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        key_resp_7.frameNStart = frameN  # exact frame index
        key_resp_7.tStart = t  # local t and not account for scr refresh
        key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
        key_resp_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_7.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_7.getKeys(keyList=['return'], waitRelease=False)
        _key_resp_7_allKeys.extend(theseKeys)
        if len(_key_resp_7_allKeys):
            key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in conclusionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "conclusion"-------
for thisComponent in conclusionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# the Routine "conclusion" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
