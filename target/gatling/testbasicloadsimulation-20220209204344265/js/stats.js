var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1226",
        "ok": "1226",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1001",
        "ok": "1001",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 92
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.923",
        "ok": "0.923",
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
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "900",
        "ok": "900",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1226",
        "ok": "1226",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1001",
        "ok": "1001",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1014",
        "ok": "1014",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1205",
        "ok": "1205",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 92
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.923",
        "ok": "0.923",
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
