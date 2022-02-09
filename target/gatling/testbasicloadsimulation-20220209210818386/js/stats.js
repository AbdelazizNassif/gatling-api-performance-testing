var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "160",
        "ok": "114",
        "ko": "46"
    },
    "minResponseTime": {
        "total": "744",
        "ok": "758",
        "ko": "744"
    },
    "maxResponseTime": {
        "total": "1368",
        "ok": "1054",
        "ko": "1368"
    },
    "meanResponseTime": {
        "total": "844",
        "ok": "838",
        "ko": "858"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "67",
        "ko": "103"
    },
    "percentiles1": {
        "total": "839",
        "ok": "827",
        "ko": "845"
    },
    "percentiles2": {
        "total": "883",
        "ok": "885",
        "ko": "873"
    },
    "percentiles3": {
        "total": "978",
        "ok": "956",
        "ko": "1005"
    },
    "percentiles4": {
        "total": "1049",
        "ok": "1010",
        "ko": "1223"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 43
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 46,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.848",
        "ok": "3.455",
        "ko": "1.394"
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
        "total": "160",
        "ok": "114",
        "ko": "46"
    },
    "minResponseTime": {
        "total": "744",
        "ok": "758",
        "ko": "744"
    },
    "maxResponseTime": {
        "total": "1368",
        "ok": "1054",
        "ko": "1368"
    },
    "meanResponseTime": {
        "total": "844",
        "ok": "838",
        "ko": "858"
    },
    "standardDeviation": {
        "total": "79",
        "ok": "67",
        "ko": "103"
    },
    "percentiles1": {
        "total": "839",
        "ok": "827",
        "ko": "845"
    },
    "percentiles2": {
        "total": "883",
        "ok": "885",
        "ko": "873"
    },
    "percentiles3": {
        "total": "978",
        "ok": "956",
        "ko": "1005"
    },
    "percentiles4": {
        "total": "1049",
        "ok": "1010",
        "ko": "1223"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 45,
    "percentage": 28
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 69,
    "percentage": 43
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 46,
    "percentage": 29
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.848",
        "ok": "3.455",
        "ko": "1.394"
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
