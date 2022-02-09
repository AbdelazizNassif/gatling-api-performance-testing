var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "689",
        "ok": "689",
        "ko": "-"
    },
    "percentiles1": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1424",
        "ok": "1424",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1479",
        "ok": "1479",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.4",
        "ok": "0.4",
        "ko": "-"
    }
},
contents: {
"req_add-user-reques-46550": {
        type: "REQUEST",
        name: "add user request",
path: "add user request",
pathFormatted: "req_add-user-reques-46550",
stats: {
    "name": "add user request",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1493",
        "ok": "1493",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
        "ko": "-"
    }
}
    },"req_get-users-list-25838": {
        type: "REQUEST",
        name: "get users list",
path: "get users list",
pathFormatted: "req_get-users-list-25838",
stats: {
    "name": "get users list",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles2": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles3": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles4": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.2",
        "ok": "0.2",
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
