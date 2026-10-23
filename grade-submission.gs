const TRACKER_ID = '1IwfPam3I-o4cFu09R9Z6U86RK59LF96ZZjlEqArPAoM';
const LAB_ORIGIN = 'https://cyhendrix.github.io';
const LABS = {
  "Lesson 25: Functions": {"terms": ["Function", "Function definition", "Function call", "Function body", "Abstraction", "Refactoring"], "apply": [1, 0, 2, 1], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 23: Collisions": {"terms": ["displace()", "collide()", "bounce()", "bounceOff()", "Collider", "Abstraction"], "apply": [0, 1, 2, 0], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 22: Complex Sprite Movement": {"terms": ["Acceleration", "Counter pattern", "Simulated gravity", "Jump", "Vertical velocity", "Combining patterns"], "apply": [0, 1, 2, 0], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 20: Collision Detection": {"terms": ["isTouching()", "Collider", "sprite.debug", "Overlap", "Boolean result", "Abstraction"], "apply": [1, 0, 2, 1], "debug": [0, 2, 1, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 19: Velocity": {"terms": ["Velocity", "sprite.velocityX", "sprite.velocityY", "sprite.rotationSpeed", "Zero velocity", "Abstraction"], "apply": [1, 0, 2, 1], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 17: Mouse Input": {"terms": ["mouseDown()", "mouseWentDown()", "mouseWentUp()", "mouseDidMove()", "else branch", "sprite.visible"], "apply": [0, 1, 2, 0], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 16: Keyboard Input": {"terms": ["Keyboard input", "keyDown()", "Key name", "Input condition", "Input response", "Continuous control"], "apply": [1, 0, 2, 1], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 15: Conditionals": {"terms": ["Boolean expression", "Condition", "if statement", "Comparison operator", "Equality comparison (==)", "Assignment (=)"], "apply": [1, 2, 0, 1], "debug": [0, 2, 1, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 13: Sprite Movement": {"terms": ["Counter pattern", "Horizontal movement", "Vertical movement", "Increment", "Decrement", "Rotation update"], "apply": [1, 0, 2, 1], "debug": [0, 2, 0, 1], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 12: The Draw Loop": {"terms": ["Draw loop", "Frame", "Frame rate", "Setup code", "background()", "Repeated code"], "apply": [1, 2, 0, 1], "debug": [1, 2, 0, 1], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 10: Text": {"terms": ["String", "text()", "textSize()", "Text position", "fill()", "Drawing order"], "apply": [0, 1, 2, 0], "debug": [0, 1, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 09: Sprite Properties": {"terms": ["Property", "Dot notation", "sprite.x", "sprite.y", "sprite.scale", "sprite.rotation"], "apply": [0, 1, 2, 0], "debug": [1, 0, 1, 2], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 08: Sprites": {"terms": ["Sprite", "createSprite()", "setAnimation()", "drawSprites()", "Animation Tab", "Animation label"], "apply": [1, 0, 2, 1], "debug": [1, 0, 2, 0], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  "Lesson 06: Random Numbers": {"terms": ["randomNumber(min, max)", "Minimum", "Maximum", "Range", "Variable update", "Stored random value"], "apply": [1, 2, 0, 2], "debug": [0, 1, 1, 2], "total": 17, "orders": [[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]},
  'Lesson 05: Variables': {
    terms: ['Variable','Variable name','Value','var','Assignment (=)','Declaration'],
    apply: [0,1,2,0], debug: [0,0,0,1,1], total: 29,
    variables: true
  },
  'Lesson 04: Shapes and Parameters': {
    terms: ['Parameter','x-position','y-position','Width','Height','background()'],
    apply: [0,1,2,0], debug: [0,1,1], total: 17,
    parameters: [[80,120,160,60],[220,180,120,60],[200,60,80,180],[100,260,60,140]]
  },
  'Lesson 03: Drawing in Game Lab': {
    terms: ['Program','Bug','Debugging','rect()','ellipse()','fill()'],
    apply: [0,1,2,0], debug: [0,0,0], total: 15,
    orders: [[0,1,2,3],[0,1,2,3]]
  },
  'Lesson 01: Programming for a Purpose': {
    terms: ['User','Prototype','Define','Prepare','Try','Reflect'],
    apply: [1,0,0,0], debug: [1,0,0], total: 14
  },
  'Lesson 02: Plotting Shapes': {
    terms: ['Origin','x-coordinate','y-coordinate','Circle center','Rectangle corner','Drawing order'],
    apply: [0,1,2,1], debug: [0,2,1], total: 17,
    points: [[100,100],[250,150],[20,250],[330,70]]
  }
};

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    ok: true, service: 'Game Design Grade Submission', lessons: [1,2,3,4,5,6,8,9,10,12,13,15,16,17,19,20,22,23,25]
  })).setMimeType(ContentService.MimeType.JSON);
}

function gradeVariables(p, config) {
  const a = p.answers, checks = p.checks || {};
  if (!a || !a.identify || !a.build || !a.naming || !a.apply || !a.debug)
    throw new Error('Answers are missing.');
  const earned = {identify: 0, build: 0, naming: 0, apply: 0, debug: 0};
  const possible = {identify: 6, build: 6, naming: 8, apply: 4, debug: 5};
  config.terms.forEach(function(term, i) { if (a.identify[i] === term) earned.identify++; });
  [ ['apply', config.apply], ['debug', config.debug] ].forEach(function(group) {
    group[1].forEach(function(answer, i) {
      if (a[group[0]][i] !== undefined && String(a[group[0]][i]) === String(answer))
        earned[group[0]]++;
    });
  });
  for (let i = 0; i < 3; i++) {
    const order = a.build[i];
    if (!Array.isArray(order) || order.length !== 5 || new Set(order).size !== 5 ||
        order.some(function(v) { return ![0,1,2,3,4].includes(v); }))
      throw new Error('Invalid declaration tile order.');
    if (order.join('|') === '0|1|2|3|4') earned.build++;
  }
  const typed = [['playerLives',3],['shape_width',120],['yPosition',250]];
  typed.forEach(function(target, i) {
    const match = /^\s*var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*(0|[1-9][0-9]*)\s*;\s*$/.exec(String(a.build[i+3] || ''));
    if (match && match[1] === target[0] && Number(match[2]) === target[1]) earned.build++;
  });
  const names = ['playerScore','player_score','circleXPosition','circle_x_position'];
  names.forEach(function(name, i) {
    if (String(a.naming[i] || '').trim() === name) earned.naming++;
  });
  [1,2,0,0].forEach(function(answer, i) {
    if (a.naming[i+4] !== undefined && String(a.naming[i+4]) === String(answer)) earned.naming++;
  });
  if (!Object.keys(possible).every(function(key) {
    return checks[key] === 2 || (checks[key] === 1 && earned[key] === possible[key]);
  })) throw new Error('Finish every activity, including Naming Practice, before submitting.');
  const points = Object.keys(earned).reduce(function(sum, key) { return sum + earned[key]; }, 0);
  return {points: points, total: config.total, score: Math.round(points / config.total * 100)};
}

function gradeAttempt(p) {
  const config = LABS[p.lab], a = p.answers, checks = p.checks || {};
  if (!config) throw new Error('This lesson is not supported yet.');
  if (config.variables) return gradeVariables(p, config);
  if (!a || !a.identify || !a.apply || !a.debug) throw new Error('Answers are missing.');
  let points = 0, buildPoints = 0;
  const earned = {identify: 0, apply: 0, debug: 0};
  config.terms.forEach(function(term, i) { if (a.identify[i] === term) { points++; earned.identify++; } });
  [ ['apply', config.apply], ['debug', config.debug] ].forEach(function(group) {
    group[1].forEach(function(answer, i) {
      if (a[group[0]][i] !== undefined && String(a[group[0]][i]) === String(answer)) { points++; earned[group[0]]++; }
    });
  });
  if (config.parameters) {
    if (!a.build || typeof a.build !== 'object') throw new Error('Shape parameters are missing.');
    config.parameters.forEach(function(target, i) {
      const answer = a.build[i];
      if (!Array.isArray(answer) || answer.length !== 4) throw new Error('Invalid shape parameters.');
      if (answer.every(function(value, j) { return value === target[j]; })) buildPoints++;
    });
  } else if (config.orders) {
    if (!a.build || typeof a.build !== 'object') throw new Error('Drawing code is missing.');
    config.orders.forEach(function(order, i) {
      const answer = a.build[i];
      if (!Array.isArray(answer) || answer.length !== 4 || new Set(answer).size !== 4 ||
          answer.some(function(v) { return ![0,1,2,3].includes(v); })) throw new Error('Invalid drawing code order.');
      if (answer.join('|') === order.join('|')) buildPoints++;
    });
  } else if (config.points) {
    if (!a.build || typeof a.build !== 'object') throw new Error('Grid answers are missing.');
    config.points.forEach(function(target, i) {
      const answer = a.build[i];
      if (answer && answer.x === target[0] && answer.y === target[1]) buildPoints++;
    });
  } else {
    const process = ['Define','Prepare','Try','Reflect'];
    if (!Array.isArray(a.order) || a.order.length !== 4 ||
        new Set(a.order).size !== 4 || a.order.some(function(v) { return !process.includes(v); }))
      throw new Error('Invalid process order.');
    if (a.order.join('|') === process.join('|')) buildPoints = 1;
  }
  const possible = {identify: config.terms.length, apply: config.apply.length,
    debug: config.debug.length, build: config.parameters ? config.parameters.length : config.orders ? config.orders.length : config.points ? config.points.length : 1};
  earned.build = buildPoints;
  if (!Object.keys(possible).every(function(k) {
    return checks[k] === 2 || (checks[k] === 1 && earned[k] === possible[k]);
  })) throw new Error('Finish every activity before submitting.');
  points += buildPoints;
  return {points: points, total: config.total, score: Math.round(points / config.total * 100)};
}

function doPost(e) {
  let receipt = {ok: false, attemptId: '', message: 'Grade could not be recorded.'};
  try {
    const raw = e && e.parameter && e.parameter.payload;
    if (!raw || raw.length > 12000) throw new Error('Invalid submission.');
    const p = JSON.parse(raw);
    receipt.attemptId = String(p.attemptId || '');
    if (!/^[a-zA-Z0-9_-]{16,100}$/.test(receipt.attemptId)) throw new Error('Invalid attempt ID.');
    const name = String(p.name || '').trim().replace(/\s+/g, ' ');
    const period = String(p.period || '');
    if (name.length < 3 || name.length > 100 || /^[=+@-]/.test(name)) throw new Error('Check your student name.');
    if (!['1st Block','2nd Block','3rd Block','4th Block'].includes(period)) throw new Error('Choose a valid class period.');
    const grade = gradeAttempt(p);
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = SpreadsheetApp.openById(TRACKER_ID).getSheetByName('Form Responses 1');
      if (!sheet) throw new Error('The grade response sheet is missing.');
      const expected = ['Timestamp','Student Name','Class Period','Practice Lab','Score'];
      const headings = sheet.getRange(1,1,1,5).getDisplayValues()[0];
      if (headings.some(function(v,i) { return v.trim() !== expected[i]; }))
        throw new Error('The response sheet headings need to be checked.');
      const extra = sheet.getRange(1,6).getDisplayValue();
      if (extra && extra !== 'Attempt ID') throw new Error('Column F is already in use.');
      if (!extra) sheet.getRange(1,6).setValue('Attempt ID');
      const last = sheet.getLastRow();
      const found = last > 1 ? sheet.getRange(2,6,last-1,1)
        .createTextFinder(receipt.attemptId).matchEntireCell(true).findNext() : null;
      let rowNumber;
      if (found) {
        rowNumber = found.getRow();
      } else {
        rowNumber = last + 1;
        sheet.getRange(rowNumber,1,1,6).setValues([
          [new Date(),name,period,p.lab,grade.score,receipt.attemptId]
        ]);
        SpreadsheetApp.flush();
      }
      const stored = sheet.getRange(rowNumber,2,1,5).getValues()[0];
      if (stored[0] !== name || stored[1] !== period || stored[2] !== p.lab ||
          Number(stored[3]) !== grade.score || stored[4] !== receipt.attemptId)
        throw new Error('Unable to confirm this attempt. Check the name, period, and saved answers.');
      receipt = {ok: true, attemptId: receipt.attemptId, score: grade.score,
        points: grade.points, total: grade.total, message: 'Your grade was recorded successfully.'};
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    receipt.message = error.message || 'Please try submitting again.';
  }
  const safe = JSON.stringify(receipt).replace(/</g, '\\u003c');
  return HtmlService.createHtmlOutput(
    '<!doctype html><meta charset="utf-8"><p>Grade submission processed. Return to your practice lab.</p>' +
    '<script>window.top.postMessage(' + safe + ', ' + JSON.stringify(LAB_ORIGIN) + ');</script>'
  ).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


