var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "2000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13346",
        "ok": "13346",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2316",
        "ok": "2316",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3492",
        "ok": "3492",
        "ko": "-"
    },
    "percentiles1": {
        "total": "354",
        "ok": "354",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3503",
        "ok": "3503",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10392",
        "ok": "10392",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10749",
        "ok": "10749",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1244,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 45,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 711,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    }
},
contents: {
"req_get-users-list-25838": {
        type: "REQUEST",
        name: "get users list",
path: "get users list",
pathFormatted: "req_get-users-list-25838",
stats: {
    "name": "get users list",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "281",
        "ok": "281",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13346",
        "ok": "13346",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4557",
        "ok": "4557",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3787",
        "ok": "3787",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3505",
        "ok": "3505",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7441",
        "ok": "7441",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10558",
        "ok": "10558",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11299",
        "ok": "11299",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 244,
    "percentage": 24
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 45,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 711,
    "percentage": 71
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "62.5",
        "ko": "-"
    }
}
    },"req_get-single-user-e1512": {
        type: "REQUEST",
        name: "Get single user",
path: "Get single user",
pathFormatted: "req_get-single-user-e1512",
stats: {
    "name": "Get single user",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "492",
        "ok": "492",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "44",
        "ok": "44",
        "ko": "-"
    },
    "percentiles1": {
        "total": "66",
        "ok": "66",
        "ko": "-"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles3": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    },
    "percentiles4": {
        "total": "361",
        "ok": "361",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1000,
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
        "total": "62.5",
        "ok": "62.5",
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
