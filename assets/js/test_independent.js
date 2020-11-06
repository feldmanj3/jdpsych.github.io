function computetStatistic_independent(){
// This is Pre-Post, where the values matter for differences
        
// Step 1: Declaring the sums for the group -- RIGHT
const pre = [...arraygroupOneInput];
const post = [...arraygroupTwoInput];
//const pre = [4, 2, 5, 5, 10];
//const post = [12, 14, 8, 15, 20];

// Finding the means for group 1
let group1_sum = 0;
for(let i in pre) {
    group1_sum += parseInt(pre[i]);
}
const group1_samplesize = pre.length;
 
let group1_mean = group1_sum / group1_samplesize;
console.log("This is the group 1 mean", group1_mean);

// Finding the means for group 2
let group2_sum = 0;
for(let i in post) {
    group2_sum += parseInt(post[i]);
}
let group2_samplesize = post.length;
 
let group2_mean = group2_sum / group2_samplesize;
console.log("This is the group 2 mean", group2_mean);
    
    
// Step 2: Finding the difference + SUM -- RIGHT
let group1_difference = [];
let group2_difference = [];
    
for (i = 0; i < pre.length; i++) {
    group1_difference.push(pre[i] - group1_mean);
}
console.log("This is the group 1 differences", group1_difference)
for (i = 0; i < group1_difference.length; i++) {
    group1_difference[i] = group1_difference[i] * group1_difference[i];
}
console.log("This is the group 1 differences squared", group1_difference)
let group1_sumOfDifferenceSquared = group1_difference.reduce ((accumulator,currentValue) => accumulator + currentValue);
console.log("This the sum of difference squared:");
console.log(group1_sumOfDifferenceSquared); // SUM of D^2


for (i = 0; i < post.length; i++) {
    group2_difference.push(post[i] - group2_mean);
}
console.log("This is the group 2 differences", group2_difference);
for (i = 0; i < group2_difference.length; i++) {
    group2_difference[i] = group2_difference[i] * group2_difference[i];
}
console.log("This is the group 2 differences squared", group2_difference)
let group2_sumOfDifferenceSquared = group2_difference.reduce ((accumulator,currentValue) => accumulator + currentValue);
console.log("This the sum of difference squared:");
console.log(group2_sumOfDifferenceSquared);
    
// Calculating the variance
let group1_varance = group1_sumOfDifferenceSquared / (group1_difference.length - 1);
console.log("This is group 1 variance", group1_varance);

let group2_varance = group2_sumOfDifferenceSquared / (group2_difference.length - 1);
console.log("This is group 2 variance", group2_varance);

// Conduct a variance check - add this for later editions
    
// Pooled Variance
//console.log(group1_difference.length);
group_pooled_variance = ((group1_varance * (group1_difference.length - 1)) + 
(group2_varance * (group2_difference.length - 1))) / (group1_difference.length + group2_difference.length - 2);

console.log("This is pooled variance", group_pooled_variance);

// T-test
    
independent_topEQ = group1_mean - group2_mean;
independent_bottomEQ = Math.sqrt((group_pooled_variance/group1_difference.length)+(group_pooled_variance/group2_difference.length));
    
independent_bottomEQ_unequal = Math.sqrt((group1_varance/group1_difference.length)+(group2_varance/group2_difference.length));
    
tStatistic_independent = independent_topEQ / independent_bottomEQ;
let tStatistic_independent_unequal = independent_topEQ / independent_bottomEQ_unequal;
console.log("This is the t statistic:", tStatistic_independent);
    
// Effect Size https://www.socscistatistics.com/effectsize/default3.aspx
    
independent_effectsize = Math.abs((group2_mean - group1_mean) / Math.sqrt(group_pooled_variance));
console.log("This is the effect size", independent_effectsize);

    
let df = group1_difference.length + group2_difference.length - 2;
    
// Prior to tDistribution Selector, adjust the df based on test type (independent is N-2, paired is N-1 or just N, and one sample is n-1)
    
tDistributionSelector(df);
function tDistributionSelector (df){
    let y = df;
    if (y > 30 && y < 35) {y = 30}
    else if (y > 35 && y < 40) {y = 40}
    else if (y > 40 && y < 51) {y = 40} // Includes 40
    else if (y > 50 && y < 60) {y = 60}
    else if (y > 60 && y < 70) {y = 60}
    else if (y > 71 && y < 80) {y = 80}
    else if (y > 80 && y < 90) {y = 80}
    else if (y > 91 && y < 100) {y = 100}
    else if (y > 100 && y < 499) {y = 100} 
    else if (y > 500 && y < 1000) {y = 1000} 
    return y;
}

/*
Need to find the test type (one tail vs. two tail), p-value, next.
1. Test type & p-value
2. If one tail, convert t-crit vlaue based on directionality.
*/
let df_adjusted = tDistributionSelector(df);
let tcrit = 0;
let alpha_level  = 0;
    if (test_parameters[2]["p_value"] === "10") {
        alpha_level = ".10";
        if (test_parameters[3]["tail_type"] == "tail_two") {
            tcrit = tCrit10Mapped[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_left") {
            tcrit = "-" + tCrit10Mapped_onetail[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_right") {
            tcrit = tCrit10Mapped_onetail[df_adjusted];
        } 
    } else if (test_parameters[2]["p_value"] === "05"){
        alpha_level = ".05";
        if (test_parameters[3]["tail_type"] == "tail_two") {
            tcrit = tCrit05Mapped[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_left") {
            tcrit = "-" + tCrit05Mapped_onetail[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_right") {
            tcrit = tCrit05Mapped_onetail[df_adjusted];
        } 
    } else if (test_parameters[2]["p_value"] === "01"){
        alpha_level = ".01";
        if (test_parameters[3]["tail_type"] == "tail_two") {
            tcrit = tCrit01Mapped[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_left") {
            tcrit = "-" + tCrit01Mapped_onetail[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_right") {
            tcrit = tCrit01Mapped_onetail[df_adjusted];
        } 
    } else if (test_parameters[2]["p_value"] === "001"){
        alpha_level = ".001";
        if (test_parameters[3]["tail_type"] == "tail_two") {
            tcrit = tCrit001Mapped[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_left") {
            tcrit = "-" + tCrit001Mapped_onetail[df_adjusted];
        } else if (test_parameters[3]["tail_type"] == "tail_one_right") {
            tcrit = tCrit001Mapped_onetail[df_adjusted];
        } 
    } else {
        console.log("Not specified");
    } 
    
    
    
    
// Output
    
    // Pushing the output to the variables:
    /*
    
    Instead of getElementbyId(x).innerHTML = OUTPUT VALUE...
    
    Every single cell has it's own variable already, and the goal is to push the
    output values to those pre-defined variables
    
    */
    
    // Legend
    // var[0] = id name
    // var[1] = Readable name
    // var[2]... = Readable, variable, etc...
    
    // Descriptive Output 
    
    let column_1_label = "<b>Group 1</b>";
    let column_2_label = "<b>Group 2</b>";
    let column_3_label = "<b>(x-x&#772;)^2</b>";
    let column_4_label = "<b>(y-y&#772;)^2</b>";
    
    let column_1_sum = group1_sum;
    let column_2_sum = group2_sum;
    let column_3_sum = group1_sumOfDifferenceSquared.toFixed(4);
    let column_4_sum = group2_sumOfDifferenceSquared.toFixed(4);
    
    let column_1_n = group1_samplesize;
    let column_2_n = group2_samplesize;
    let column_3_n = group1_difference.length - 1 + " (df)";
    let column_4_n = group2_difference.length - 1 + " (df)";
    
    let column_1_mean = group1_mean;
    let column_2_mean = group2_mean;
    let column_3_mean = "&nbsp;";
    let column_4_mean = "&nbsp;";
    
 
    let column_1_variance = group1_varance.toFixed(4);
    let column_2_variance = group2_varance.toFixed(4);
    let column_3_variance = "&nbsp;";
    let column_4_variance = "&nbsp;";
    
    let column_1_sd = Math.sqrt(group1_varance,2).toFixed(4);
    let column_2_sd = Math.sqrt(group2_varance,2).toFixed(4);
    let column_3_sd = "&nbsp;";
    let column_4_sd = "&nbsp;";
    
    const descriptive_labels = [ // Static names
        "descriptive_labels",
        "&nbsp;",
        column_1_label,
        column_2_label,
        column_3_label,
        column_4_label
    ]

    const descriptive_sum = [
        "descriptive_sum",
        "Sum",
        column_1_sum,
        column_2_sum,
        column_3_sum,
        column_4_sum
    ]
    
    const descriptive_n = [
        "descriptive_n",
        "Sample Size",
        column_1_n,
        column_2_n,
        column_3_n,
        column_4_n
    ]
        
    const descriptive_mean = [
        "descriptive_mean",
        "Mean",
        column_1_mean,
        column_2_mean,
        column_3_mean,
        column_4_mean
    ]
            
    const descriptive_variance = [
        "descriptive_variance",
        "Variance",
        column_1_variance,
        column_2_variance,
        column_3_variance,
        column_4_variance
    ]
    
    const descriptive_sd = [
        "descriptive_sd",
        "Standard Deviation",
        column_1_sd,
        column_2_sd,
        column_3_sd,
        column_4_sd
    ]

    // Descriptive Output 
    
    //tStatistic_independent = tStatistic_independent.substring(0,6);
    
    let column_1_output_label = "Hello";
    let column_1_output_tvalue = tStatistic_independent.toFixed(4);
    let column_1_output_df = group1_samplesize + group2_samplesize - 2;
    let column_1_output_pvalue = alpha_level;
    let column_1_output_effect_size = independent_effectsize.toFixed(4);
    let column_1_output_ci_ll = "Hello";
    let column_1_output_ci_ul = "Hello";
    
    const output_labels = [ // Static names
        "output_labels",
        "&nbsp;",
        column_1_output_label,
    ]

    const output_tvalue = [
        "output_tvalue",
        "T-statistic",
        column_1_output_tvalue,

    ]
    
    const output_df = [
        "output_df",
        "Degrees of freedom (df)",
        column_1_output_df
    ]
        
    const output_pvalue = [
        "output_pvalue",
        "P Value",
        column_1_output_pvalue
    ]
            
    const output_effect_size = [
        "output_effect_size",
        "Effect Size",
        column_1_output_effect_size,
    ]
    
    const output_ci_ll = [
        "output_ci_ll",
        "Lower Limit",
        column_1_output_ci_ll
    ]

    const output_ci_ul = [
        "output_ci_ul",
        "Upper Limit",
        column_1_output_ci_ul
    ]
    
    // Hypothesis Test
    let column_1_tos_h0 = "";
    let column_1_tos_ha = "";
    let column_1_tos_name = "";
    let readable_testname = "";
    let readable_tail = "";
    let hypothesis_comparison = "";
    hypothesisTest();
    

    
    function hypothesisTest(){
        // Get the tail type, and the level of significance
        // It needs to spit out the general formula based on this
        //test_parameters[1]["test_type"]
        //test_parameters[2]["p_value"]
        //test_parameters[3]["tail_type"]
        /*
        
        05
        10
        01
        001

        tail_two
        tail_one_left
        tail_one_right
        Readable Test Name
        Readable Tail Name
        */
        
        if (test_parameters[1]["test_type"] == "one_way") {
            readable_testname = "one Sample t-test";
        } else if (test_parameters[1]["test_type"] == "paired") {
            readable_testname = "paired t-test";
        } else if (test_parameters[1]["test_type"] == "independent") {
            readable_testname = "independent t-test";
        }
        
    
        if (test_parameters[3]["tail_type"] == "tail_two") {
            readable_tail = "Two-tailed";
            column_1_tos_h0 = "x&#772; = y&#772;";
            column_1_tos_ha = "x&#772; &#8800; y&#772;";
            // Absolute values
            if (Math.abs(tStatistic_independent) > tcrit) {
                // Significant
                hypothesis_comparison = "<";
            } else if (Math.abs(tStatistic_independent) < tcrit) {
                // Not significant
                hypothesis_comparison = ">";
            }
            
            
        } else if (test_parameters[3]["tail_type"] == "tail_one_left") {
            readable_tail = "Left-tailed";
            column_1_tos_h0 = "x&#772; = y&#772;";
            column_1_tos_ha = "x&#772; < y&#772;";
            // Make t-crit negative
            -Math.abs(tcrit);
            if (tStatistic_independent > tcrit) {
                // Not significant
                hypothesis_comparison = ">";
            } else if (tStatistic_independent < tcrit) {
                // Significant
                hypothesis_comparison = "<";
            }

        } else if (test_parameters[3]["tail_type"] == "tail_one_right") {
            readable_tail = "Right-tailed";
            column_1_tos_h0 = "x&#772; = y&#772;";
            column_1_tos_ha = "x&#772; > y&#772;";
            // Is group 2 greater than group 1?
            if (tStatistic_independent > tcrit) {
                // Significant
                hypothesis_comparison = "<";
            } else if (tStatistic_independent < tcrit) {
                // Not significant
                hypothesis_comparison = ">";
            }
        }   
    
        column_1_tos_name = readable_tail + ",&nbsp;" + readable_testname; 
}
    
     

    let column_1_tos_label = "Hello";
    let column_1_tos_tcrit = tcrit;
    let column_1_tos_tvalue = tStatistic_independent.toFixed(4);
    let column_1_tos_pvalue = alpha_level;
    let column_1_tos_conclusion = "";

    if (hypothesis_comparison === ">") {
    column_1_tos_conclusion = "Therefore, fail to reject the null hypothesis.";
    } else if (hypothesis_comparison === "<") {
    column_1_tos_conclusion = "Therefore, reject the null hypothesis and accept the alternative hypothesis.";
    }
    
    const tos_labels = [ // Static names
        "tos_labels",
        "&nbsp;",
        column_1_tos_label
    ]

    const tos_name = [
        "tos_name",
        "Test details",
        column_1_tos_name

    ]
    
    const tos_h0 = [
        "tos_h0",
        "Null hypothesis (H0)",
        column_1_tos_h0
    ]
        
    const tos_ha = [
        "tos_ha",
        "Alternative hypothesis (Ha)",
        column_1_tos_ha
    ]
            
    const tos_tcrit = [
        "tos_tcrit",
        "T-crit",
        column_1_tos_tcrit,
  
    ]
    
    const tos_tvalue = [
        "tos_tvalue",
        "T-statistic",
        column_1_tos_tvalue
    ]

    const tos_pvalue = [
        "tos_pvalue",
        "Alpha level",
        column_1_tos_pvalue
    ]

    const tos_conclusion = [
        "tos_conclusion",
        "Conclusion",
        column_1_tos_conclusion
    ]
    
    // APA RESULTS
    
    let column_1_conclusion_label = "How to report your results:";
    
    /*
    
    COMPARE the t-value and t-crit, and consider whether the directionality and test type.
    
    let APA_pvalue = {
        
    if (test_parameters[2]["p_value"] === "10") {
        console.log("This is a .10");
    } else if (test_parameters[2]["p_value"] === "05"){
        console.log("This is a .05");
    } else if (test_parameters[2]["p_value"] === "01"){
        console.log("This is a .01");
    } else if (test_parameters[2]["p_value"] === "001"){
        console.log("This is a .001");
    } else {
        console.log("Not specified");
    } 
        
        
    }

    */
    
    // tStatistic_independent
    // tcrit

    
    
    let APA_pvalue = "> .05";
    let column_1_conclusion_APA = "<i>t</i>(" + column_1_output_df + ")&nbsp;=&nbsp;" + tStatistic_independent.toFixed(4) + ", p " + hypothesis_comparison + "&nbsp;" + alpha_level + ", d = " + column_1_output_effect_size + ".";
        
    let column_1_conclusion_APA2 = "<br/><p class='text-danger'><small>Note: APA7 requires you to report exact p-values. Use <u><a class='text-danger' href='https://www.graphpad.com/quickcalcs/pvalue1.cfm'>this calculator</a></u>.</small></p>";
    
    
    const conclusion_labels = [ // Static names
        "conclusion_labels",
        column_1_conclusion_label,
    ]

    const conclusion_APA = [
        "conclusion_APA",
        column_1_conclusion_APA,

    ]
    
    const conclusion_APA2 = [
        "conclusion_APA2",
        column_1_conclusion_APA2,

    ]
    
    // Variance Check 
    
    // Finding the F-statistic value
    let variance_f = "";
    if (group1_varance > group2_varance) {
        // do this
        variance_f = group1_varance / group2_varance;
    } else if (group1_varance < group2_varance) {
        // do this
        variance_f = group2_varance / group1_varance;
    }
    
    // Finding the F-crit value
    let fcrit = fDistributionSelector(pre.length-1, post.length-1);
    let column_1_variancecheck_label = "";
    let column_1_variancecheck_conclusion = "";
    
    // Compare F-crit and F-statistic
    if (fcrit > variance_f) {
        column_1_variancecheck_label = "F = " + variance_f.toFixed(4) + ", F-crit = " + fcrit.toFixed(4);
        column_1_variancecheck_conclusion = "F < F-crit (" + fcrit.toFixed(4) + "). Therefore, there is equal variance. A student's t-test will be conducted.";
    } else if (variance_f > fcrit) {
        column_1_variancecheck_label = "F = " + variance_f.toFixed(4) + ", F-crit = " + fcrit.toFixed(4);
        column_1_variancecheck_conclusion = "F > F-crit (" + fcrit.toFixed(4) + "). Therefore, there is unequal variance. A Welch's t-test will be conducted.";
        tStatistic_independent = tStatistic_independent_unequal;
    }
    
    const variancecheck_labels = [ // Static names
        "variancecheck_labels",
        column_1_variancecheck_label,
    ]

    const variancecheck_conclusion = [
        "conclusion_APA",
        column_1_variancecheck_conclusion,

    ]
    
    
    let section = [];

    function sectionNaming (section, section_name){
        let section_clear = document.createElement("div");
        section_clear.style.clear = "both"
        
        let sectionNaming_output = document.createElement("div");
        sectionNaming_output.innerHTML = section_name;
        sectionNaming_output.setAttribute("style", "width: 100%; margin-top: 20px;");

        document.getElementById(section).appendChild(sectionNaming_output);
        document.getElementById(section).appendChild(section_clear); 
    }
/*
Output Generator
*/
    
    section = "descriptive_output"; // Replace with section div name
    section_name = "<h4>Descriptive Output</h4>"; // Readable name
    sectionNaming(section, section_name);

    lineCreator(descriptive_labels, section);
    lineCreator(descriptive_sum, section);
    lineCreator(descriptive_n, section);
    lineCreator(descriptive_mean, section);
    lineCreator(descriptive_variance, section);
    lineCreator(descriptive_sd, section);
    
    section = "variance_output"; // Replace with section div name
    section_name = "<h4>Equal Variance Check</h4>"; // Readable name
    sectionNaming(section, section_name);

    lineCreator(variancecheck_labels, section);
    lineCreator(variancecheck_conclusion, section);
    
    section = "output"; // Replace with section div name
    section_name = "<h4>Statistical Output</h4>"; // Readable name
    sectionNaming(section, section_name);
    //lineCreator(output_labels, section);
    lineCreator(output_tvalue, section);
    lineCreator(output_df, section);
    lineCreator(output_effect_size, section);
    //lineCreator(output_ci_ll, section);
    //lineCreator(output_ci_ul, section);
    
    section = "test_of_significance_output"; // Replace with section div name
    section_name = "<h4>Hypothesis Test</h4>"; // Readable name
    sectionNaming(section, section_name);
    //lineCreator(tos_labels, section);
    lineCreator(tos_name, section);
    lineCreator(tos_pvalue, section);
    lineCreator(tos_h0, section);
    lineCreator(tos_ha, section);
    lineCreator(tos_tcrit, section);
    lineCreator(tos_tvalue, section);
    lineCreator(tos_conclusion, section);
    
    section = "conclusion_output"; // Replace with section div name
    section_name = "<h4>Conclusion Output</h4>"; // Readable name
    sectionNaming(section, section_name);
    lineCreator(conclusion_labels, section);
    lineCreator(conclusion_APA, section);
    lineCreator(conclusion_APA2, section);

    function lineCreator (varname, section){
        const y = varname;
        const z = section;
        
        for (i = 1; i < y.length; i++) {
            let x = document.createElement("div");
            x.setAttribute("id", y[0] + "_" + i);
            x.innerHTML = y[i];
            document.getElementById(z).appendChild(x); 
        }
        let x = document.createElement("div");
        x.style.clear = "both"
        document.getElementById(z).appendChild(x);   
    }

// CI μ1 - μ2 = (M1 - M2) ± ts(M1 - M2)
    /* https://www.statisticshowto.com/probability-and-statistics/confidence-interval/#CISample
    
    
    http://www.statisticslectures.com/topics/ciindependentsamplest/#:~:text=We%20use%20the%20independent%20samples,large%20that%20mean%20difference%20is.&text=Construct%20a%2095%25%20confidence%20interval,difference%20of%20these%20two%20means.
ci_value = 1.96;
independent_CI_positive = (group1_mean - group2_mean);
independent_CI_range = ci_value * (group1_mean - group2_mean);
console.log(independent_CI_positive);
console.log("±");
console.log(independent_CI_range);
*/
//independent_CI_positive = (group1_mean - group2_mean) + ci_value * (group1_mean - group2_mean)
//independent_CI_negative = (group1_mean - group2_mean) - ci_value * (group1_mean - group2_mean)
//console.log(independent_CI_negative, independent_CI_positive)
}