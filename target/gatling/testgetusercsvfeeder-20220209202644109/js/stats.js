var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7",
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1190",
        "ok": "1190",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "percentiles1": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles2": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1177",
        "ok": "1177",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 29
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.389",
        "ok": "0.389",
        "ko": "-"
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
        "ok": "7",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1190",
        "ok": "1190",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "517",
        "ok": "517",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "percentiles1": {
        "total": "290",
        "ok": "290",
        "ko": "-"
    },
    "percentiles2": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1177",
        "ok": "1177",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 71
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 29
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.389",
        "ok": "0.389",
        "ko": "-"
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
