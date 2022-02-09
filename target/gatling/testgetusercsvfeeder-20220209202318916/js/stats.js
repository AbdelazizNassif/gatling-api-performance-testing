var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "4",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "285",
        "ok": "285",
        "ko": "299"
    },
    "maxResponseTime": {
        "total": "994",
        "ok": "403",
        "ko": "994"
    },
    "meanResponseTime": {
        "total": "490",
        "ok": "326",
        "ko": "709"
    },
    "standardDeviation": {
        "total": "274",
        "ok": "46",
        "ko": "297"
    },
    "percentiles1": {
        "total": "311",
        "ok": "307",
        "ko": "833"
    },
    "percentiles2": {
        "total": "618",
        "ok": "334",
        "ko": "914"
    },
    "percentiles3": {
        "total": "946",
        "ok": "389",
        "ko": "978"
    },
    "percentiles4": {
        "total": "984",
        "ok": "400",
        "ko": "991"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.75",
        "ok": "1",
        "ko": "0.75"
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
        "total": "7",
        "ok": "4",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "285",
        "ok": "285",
        "ko": "299"
    },
    "maxResponseTime": {
        "total": "994",
        "ok": "403",
        "ko": "994"
    },
    "meanResponseTime": {
        "total": "490",
        "ok": "326",
        "ko": "709"
    },
    "standardDeviation": {
        "total": "274",
        "ok": "46",
        "ko": "297"
    },
    "percentiles1": {
        "total": "311",
        "ok": "307",
        "ko": "833"
    },
    "percentiles2": {
        "total": "618",
        "ok": "334",
        "ko": "914"
    },
    "percentiles3": {
        "total": "946",
        "ok": "389",
        "ko": "978"
    },
    "percentiles4": {
        "total": "984",
        "ok": "400",
        "ko": "991"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 57
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.75",
        "ok": "1",
        "ko": "0.75"
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
