
/*
This statistical tCrit value was created from the following resources:

https://faculty.washington.edu/heagerty/Books/Biostatistics/TABLES/t-Tables/
https://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf

// Find a better table with 4 digits and AT LEAST by 5s until df=100


*/

// Mapping df values
    
const dfMap = `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
40
60
80
100
1000`;
    
let arrayOfdfMap = {}; // Create the array to store words
arrayOfdfMap = dfMap.split(`\n`);


// Mapping values if p-value = .01

const tCrit10 = `6.314
2.920
2.353
2.132
2.015
1.943
1.895
1.860
1.833
1.812
1.796
1.782
1.771
1.761
1.753
1.746
1.740
1.734
1.729
1.725
1.721
1.717
1.714
1.711
1.708
1.706
1.703
1.701
1.699
1.697
1.684
1.671
1.664
1.660
1.646`;

let arrayOftCrit10 = {}; // Create the array to store words
arrayOftCrit10 = tCrit10.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit10Mapped = {};
for (i = 0; i < dfMap.length; i++) { tCrit10Mapped[arrayOfdfMap[i]] = arrayOftCrit10[i]; }
console.log(tCrit10Mapped)

// Mapping values if p-value = .05

const tCrit05 = `12.71
4.303
3.182
2.776
2.571
2.447
2.365
2.306
2.262
2.228
2.201
2.179
2.160
2.145
2.131
2.120
2.110
2.101
2.093
2.086
2.080
2.074
2.069
2.064
2.060
2.056
2.052
2.048
2.045
2.042
2.021
2.000
1.990
1.984
1.962`;

let arrayOftCrit05 = {}; // Create the array to store words
arrayOftCrit05 = tCrit05.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit05Mapped = {};
for (i = 0; i < dfMap.length; i++) { tCrit05Mapped[arrayOfdfMap[i]] = arrayOftCrit05[i]; }
console.log(tCrit05Mapped)

// Mapping values if p-value = .01

const tCrit01 = `63.66
9.925
5.841
4.604
4.032
3.707
3.499
3.355
3.250
3.169
3.106
3.055
3.012
2.977
2.947
2.921
2.898
2.878
2.861
2.845
2.831
2.819
2.807
2.797
2.787
2.779
2.771
2.763
2.756
2.750
2.704
2.660
2.639
2.626
2.581`;

let arrayOftCrit01 = {}; // Create the array to store words
arrayOftCrit01 = tCrit01.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit01Mapped = {};
for (i = 0; i < dfMap.length; i++) { tCrit01Mapped[arrayOfdfMap[i]] = arrayOftCrit01[i]; }
console.log(tCrit01Mapped)

// Repeat for other crit values

// Mapping values if p-value = .05

const tCrit001 = `636.62
31.599
12.924
8.610
6.869
5.959
5.408
5.041
4.781
4.587
4.437
4.318
4.221
4.140
4.073
4.015
3.965
3.922
3.883
3.850
3.819
3.792
3.768
3.745
3.725
3.707
3.690
3.674
3.659
3.646
3.551
3.460
3.416
3.390
3.300`;

let arrayOftCrit001 = {}; // Create the array to store words
arrayOftCrit001 = tCrit001.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit001Mapped = {};
for (i = 0; i < dfMap.length; i++) { tCrit001Mapped[arrayOfdfMap[i]] = arrayOftCrit001[i]; }
console.log(tCrit001Mapped)

// One tails

// Mapping values if p-value = .01

const tCrit10_onetail = `3.078
1.886
1.638
1.533
1.476
1.440
1.415
1.397
1.383
1.372
1.363
1.356
1.350
1.345
1.341
1.337
1.333
1.330
1.328
1.325
1.323
1.321
1.319
1.318
1.316
1.315
1.314
1.313
1.311
1.310
1.303
1.296
1.292
1.290
1.282`;

let arrayOftCrit10_onetail = {}; // Create the array to store words
arrayOftCrit10_onetail = tCrit10_onetail.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit10Mapped_onetail = {};
for (i = 0; i < dfMap.length; i++) { tCrit10Mapped_onetail[arrayOfdfMap[i]] = arrayOftCrit10_onetail[i]; }
console.log(tCrit10Mapped_onetail)

// Mapping values if p-value = .05

const tCrit05_onetail = `6.314
2.920
2.353
2.132
2.015
1.943
1.895
1.860
1.833
1.812
1.796
1.782
1.771
1.761
1.753
1.746
1.740
1.734
1.729
1.725
1.721
1.717
1.714
1.711
1.708
1.706
1.703
1.701
1.699
1.697
1.684
1.671
1.664
1.660
1.646`;

let arrayOftCrit05_onetail = {}; // Create the array to store words
arrayOftCrit05_onetail = tCrit05_onetail.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit05Mapped_onetail = {};
for (i = 0; i < dfMap.length; i++) { tCrit05Mapped_onetail[arrayOfdfMap[i]] = arrayOftCrit05_onetail[i]; }
console.log(tCrit05Mapped_onetail)

// Mapping values if p-value = .01

const tCrit01_onetail = `31.82
6.965
4.541
3.747
3.365
3.143
2.998
2.896
2.821
2.764
2.718
2.681
2.650
2.624
2.602
2.583
2.567
2.552
2.539
2.528
2.518
2.508
2.500
2.492
2.485
2.479
2.473
2.467
2.462
2.457
2.423
2.390
2.374
2.364
2.330`;

let arrayOftCrit01_onetail = {}; // Create the array to store words
arrayOftCrit01_onetail = tCrit01_onetail.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit01Mapped_onetail = {};
for (i = 0; i < dfMap.length; i++) { tCrit01Mapped_onetail[arrayOfdfMap[i]] = arrayOftCrit01_onetail[i]; }
console.log(tCrit01Mapped_onetail)

// Repeat for other crit values

// Mapping values if p-value = .05

const tCrit001_onetail = `318.31
22.327
10.215
7.173
5.893
5.208
4.785
4.501
4.297
4.144
4.025
3.930
3.852
3.787
3.733
3.686
3.646
3.610
3.579
3.552
3.527
3.505
3.485
3.467
3.450
3.435
3.421
3.408
3.396
3.385
3.307
3.232
3.195
3.174
3.098`;

let arrayOftCrit001_onetail = {}; // Create the array to store words
arrayOftCrit001_onetail = tCrit001_onetail.split(`\n`);

// This function combines the mapped arrays of the df and its corresponding values
    
let tCrit001Mapped_onetail = {};
for (i = 0; i < dfMap.length; i++) { tCrit001Mapped_onetail[arrayOfdfMap[i]] = arrayOftCrit001_onetail[i]; }
console.log(tCrit001Mapped_onetail)

/* INPUT DF

Input is the: DF, t-statistic
1-30, 40, 60, 80, 100, 1000
1-30: match by number
x<34: 30
x>35: 40
x<50: 40
x>50: 60
x<70: 60
x>90: 100
x<100: 100

*/
