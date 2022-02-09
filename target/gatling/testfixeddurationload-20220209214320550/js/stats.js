var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "618",
        "ok": "182",
        "ko": "436"
    },
    "minResponseTime": {
        "total": "192",
        "ok": "200",
        "ko": "192"
    },
    "maxResponseTime": {
        "total": "1097",
        "ok": "1097",
        "ko": "926"
    },
    "meanResponseTime": {
        "total": "302",
        "ok": "377",
        "ko": "271"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "266",
        "ko": "151"
    },
    "percentiles1": {
        "total": "226",
        "ok": "240",
        "ko": "221"
    },
    "percentiles2": {
        "total": "255",
        "ok": "296",
        "ko": "243"
    },
    "percentiles3": {
        "total": "830",
        "ok": "937",
        "ko": "758"
    },
    "percentiles4": {
        "total": "966",
        "ok": "1028",
        "ko": "880"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 159,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 436,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.236",
        "ok": "3.309",
        "ko": "7.927"
    }
},
contents: {
"req_get-single-user-20955": {
        type: "REQUEST",
        name: "get single user using csv feeder",
path: "get single user using csv feeder",
pathFormatted: "req_get-single-user-20955",
stats: {
    "name": "get single user using csv feeder",
    "numberOfRequests": {
        "total": "618",
        "ok": "182",
        "ko": "436"
    },
    "minResponseTime": {
        "total": "192",
        "ok": "200",
        "ko": "192"
    },
    "maxResponseTime": {
        "total": "1097",
        "ok": "1097",
        "ko": "926"
    },
    "meanResponseTime": {
        "total": "302",
        "ok": "377",
        "ko": "271"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "266",
        "ko": "151"
    },
    "percentiles1": {
        "total": "226",
        "ok": "240",
        "ko": "221"
    },
    "percentiles2": {
        "total": "255",
        "ok": "296",
        "ko": "243"
    },
    "percentiles3": {
        "total": "830",
        "ok": "937",
        "ko": "758"
    },
    "percentiles4": {
        "total": "966",
        "ok": "1028",
        "ko": "880"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 159,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 23,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 436,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.236",
        "ok": "3.309",
        "ko": "7.927"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
