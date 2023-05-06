let autocomplete, autoComp, startUnix, endUnix, country;
const currDecs = {AED: 2, AFN: 2, ALL: 2, AMD: 2, ANG: 2, AOA: 2, ARS: 2, AUD: 2, AWG: 2, AZN: 2, BAM: 2, BBD: 2, BDT: 2, BGN: 2, BHD: 2, BIF: 2, BMD: 2, BND: 2, BOB: 2, BRL: 2, BSD: 2, BTN: 2, BWP: 2, BYN: 2, BZD: 2, CAD: 2, CDF: 2, CHF: 2, CLP: 2, CNY: 2, COP: 2, CRC: 2, CUP: 2, CVE: 0, CZK: 2, DJF: 0, DKK: 2, DOP: 2, DZD: 2, EGP: 2, ERN: 2, ETB: 2, EUR: 2, FJD: 2, FKP: 2, FOK: 2, GBP: 2, GEL: 2, GGP: 2, GHS: 2, GIP: 2, GMD: 2, GNF: 0, GTQ: 2, GYD: 2, HKD: 2, HNL: 2, HRK: 2, HTG: 2, HUF: 2, IDR: 0, ILS: 2, IMP: 2, INR: 2, IQD: 3, IRR: 2, ISK: 2, JEP: 2, JMD: 2, JOD: 3, JPY: 0, KES: 2, KGS: 2, KHR: 2, KID: 2, KMF: 0, KRW: 0, KWD: 3, KYD: 2, KZT: 2, LAK: 2, LBP: 2, LKR: 2, LRD: 2, LSL: 2, LYD: 3, MAD: 2, MDL: 2, MGA: 2, MKD: 2, MMK: 2, MNT: 2, MOP: 2, MRU: 2, MUR: 2, MVR: 2, MWK: 2, MXN: 2, MYR: 2, MZN: 2, NAD: 2, NGN: 2, NIO: 2, NOK: 2, NPR: 2, NZD: 2, OMR: 3, PAB: 2, PEN: 2, PGK: 2, PHP: 2, PKR: 2, PLN: 2, PYG: 0, QAR: 2, RON: 2, RSD: 2, RUB: 2, RWF: 0, SAR: 2, SBD: 2, SCR: 2, SDG: 2, SEK: 2, SGD: 2, SHP: 2, SLE: 2, SOS: 2, SRD: 2, SSP: 2, STN: 2, SYP: 2, SZL: 2, THB: 2, TJS: 2, TMT: 2, TND: 3, TOP: 2, TRY: 2, TTD: 2, TVD: 2, TWD: 2, TZS: 2, UAH: 2, UGX: 0, USD: 2, UYU: 2, UZS: 2, VES: 2, VND: 0, VUV: 0, WST: 2, XAF: 0, XCD: 2, XDR: 2, XOF: 0, XPF: 0, YER: 2, ZAR: 2, ZMW: 2, ZWL: 2};
const curr = {AD: "EUR", AE: "AED", AF: "AFN", AG: "XCD", AI: "XCD", AL: "ALL", AM: "AMD", AO: "AOA", AR: "ARS", AS: "USD", AT: "EUR", AU: "AUD", AW: "AWG", AX: "EUR", AZ: "AZN", BA: "BAM", BB: "BBD", BD: "BDT", BE: "EUR", BF: "XOF", BG: "BGN", BH: "BHD", BI: "BIF", BJ: "XOF", BL: "EUR", BM: "BMD", BN: "BND", BO: "BOB", BQ: "USD", BR: "BRL", BS: "BSD", BT: "BTN", BV: "NOK", BW: "BWP", BY: "BYN", BZ: "BZD", CA: "CAD", CC: "AUD", CD: "CDF", CF: "XAF", CG: "CDF", CH: "CHF", CI: "XOF", CK: "NZD", CL: "CLP", CM: "XAF", CN: "CNY", CO: "COP", CR: "CRC", CU: "CUC", CV: "CVE", CW: "ANG", CX: "AUD", CY: "EUR", CZ: "CZK", DE: "EUR", DJ: "DJF", DK: "DKK", DM: "DOP", DO: "DOP", DZ: "DZD", EC: "USD", EE: "EUR", EG: "EGP", EH: "MAD", ER: "ERN", ES: "EUR", ET: "ETB", FI: "EUR", FJ: "FJD", FM: "USD", FO: "DKK", FR: "EUR", GA: "XAF", GB: "GBP", GD: "XCD", GE: "GEL", GF: "EUR", GG: "GBP", GH: "GHS", GI: "GIP", GL: "DKK", GM: "GMD", GN: "GNF", GP: "EUR", GQ: "XAF", GR: "EUR", GT: "GTQ", GU: "USD", GW: "XOF", GY: "GYD", HK: "HKD", HN: "HNL", HR: "EUR", HT: "HTG", HU: "HUF", ID: "IDR", IE: "EUR", IL: "ILS", IM: "GBP", IN: "INR", IO: "USD", IQ: "IQD", IR: "IRR", IS: "ISK", IT: "EUR", JE: "GBP", JM: "JMD", JO: "JOD", JP: "JPY", KE: "KES", KG: "KGS", KH: "KHR", KI: "AUD", KM: "KMF", KN: "XCD", KP: "KPW", KR: "KRW", KW: "KWD", KY: "KYD", KZ: "KZT", LB: "LBP", LC: "XCD", LI: "CHF", LK: "LKR", LR: "LRD", LS: "LSL", LT: "EUR", LU: "EUR", LV: "EUR", LY: "LYD", MA: "MAD", MC: "EUR", MD: "MDL", ME: "EUR", MF: "EUR", MG: "MGA", MH: "USD", ML: "XOF", MM: "MMK", MN: "MNT", MO: "MOP", MP: "USD", MQ: "EUR", MR: "MRU", MS: "XCD", MT: "EUR", MU: "MUR", MV: "MVR", MW: "MWK", MX: "MXN", MY: "MYR", MZ: "MZN", NA: "NAD", NC: "XPF", NE: "NGN", NF: "AUD", NG: "NGN", NI: "NIO", NL: "EUR", NO: "NOK", NP: "NPR", NR: "AUD", NU: "NZD", NZ: "NZD", OM: "OMR", PA: "PAB", PE: "PEN", PF: "XPF", PG: "PGK", PH: "PHP", PK: "PKR", PL: "PLN", PM: "EUR", PN: "NZD", PR: "USD", PT: "EUR", PW: "USD", PY: "PYG", QA: "QAR", RE: "EUR", RO: "RON", RS: "RSD", RU: "RUB", RW: "RWF", SA: "SAR", SB: "SBD", SC: "SCR", SD: "SDG", SE: "SEK", SG: "SGD", SH: "SHP", SI: "EUR", SJ: "NOK", SK: "EUR", SL: "SLL", SM: "EUR", SN: "XOF", SO: "SOS", SR: "SRD", SS: "SSP", ST: "STN", SV: "SVC", SX: "ANG", SY: "SYP", SZ: "SZL", TC: "USD", TD: "XAF", TF: "EUR", TG: "XOF", TH: "THB", TJ: "TJS", TK: "NZD", TL: "USD", TM: "TMT", TN: "TND", TO: "TOP", TT: "TTD", TV: "AUD", TW: "TWD", TZ: "TZS", UA: "UAH", UG: "UGX", UM: "USD", US: "USD", UY: "UYU", UZ: "UZS", VA: "EUR", VC: "XCD", VE: "VES", VG: "USD", VI: "USD", VN: "VND", VU: "VUV", WF: "XPF", WS: "USD", YE: "YER", YT: "EUR", ZA: "ZAR", ZM: "ZMW", ZW: "ZWL", HM: "AUD", FK: "FKP", GS: "GEL", LA: "LAK", MK: "MKD", AQ: "USD", PS: "ILS", TR: "TRY"};
var minOffset = new Date().getTimezoneOffset();

function initAutocomplete() {
    autoComp = document.getElementById("autocomplete");
    autocomplete = new google.maps.places.Autocomplete(
        autoComp,
        {
            types: ["(cities)"],
            fields: ["formatted_address", "address_components", "geometry", "utc_offset_minutes"]
        });
    autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    var counter = -1;
    var disableFee = false;
    if (place == undefined || !place.geometry) {
        autoComp.placeholder = "Invalid city! Please retype.";
        autoComp.value = "";
        document.getElementById("latitude").value = "";
        document.getElementById("longitude").value = "";
        document.getElementById("country").value = "";
        minOffset = new Date().getTimezoneOffset();
        document.getElementById("radiusLabel").innerHTML = "The radius (in km) around the center of the city to check:";
        document.getElementById("datesLabel").innerHTML = "Date range to check for [Dates are processed using computer local time]: (Leave a date blank for all dates before and/or all dates after)";
        Array.from(document.getElementsByClassName("cityControlled")).forEach(function(item, _) {item.disabled = true});
        document.getElementById("curr").value = "";
        document.getElementById("currLabel").innerHTML = "";
    } else {
        var city = place.address_components.at(0).long_name;
        var currency;
        if (place.address_components.length == 1) {
            alert("Sorry! Registration Fee Filter is unavailable for this city!");
            disableFee = true;
		country = place.address_components.at(0);
        } else {
            while (currency == undefined) {
                country = place.address_components.at(counter);
                currency = curr[country.short_name];
                counter--;
            }
        }
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        minOffset = -place.utc_offset_minutes;
        autoComp.placeholder = "";
        autoComp.value = place.formatted_address;
        document.getElementById("latitude").value = lat;
        document.getElementById("longitude").value = lng;
        document.getElementById("country").value = country.long_name;
        document.getElementById("radiusLabel").innerHTML = `The radius (in km) around the center of <strong>${city}</strong> to check:`;
        document.getElementById("datesLabel").innerHTML = `Date range to check for [Dates are processed in <strong>${city}</strong> time]: (Leave a date blank for all dates before and/or all dates after)`;
        Array.from(document.getElementsByClassName("cityControlled")).forEach(function(item, _) {item.disabled = false});
        if (disableFee) {
            document.getElementById("fee").disabled = true;
            document.getElementById("curr").value = "";
            document.getElementById("currLabel").innerHTML = "";
        } else {
            document.getElementById("curr").value = currency;
            document.getElementById("currLabel").innerHTML = currency;
        }
    }
    updateTime();
}

function setCheckbox(value) {
    document.querySelectorAll("input[type='checkbox']").forEach(function(item, _) {item.checked = value});
}

function validate() {
    document.getElementById("events").value = $("input[type=checkbox]").filter(":checked").map(function() {return this.value;}).get();
    if ($("input:checked").length < 1) {
        alert("Please check at least one event!");
        event.preventDefault();
        return false;
    } else if ((startUnix && endUnix) && startUnix > endUnix) {
        alert("Please select a start date that is before the end date!");
        event.preventDefault();
        return false;
    } else {
        return true;
    }
}

function updateTime() {
    startUnix = Math.floor((new Date(document.getElementById("start").value).getTime() + minOffset * 60000) / 1000)
    endUnix = Math.floor((new Date(document.getElementById("end").value).getTime() + minOffset * 60000) / 1000)
    if (!isNaN(startUnix)) {
        document.getElementById("startUnix").value = startUnix;
    }
    if (!isNaN(endUnix)) {
        document.getElementById("endUnix").value = endUnix;
    }
}

function getFirstResult() {
	var ev1 = new Event("keydown");
	ev1.keyCode = 40;
	var ev2 = new Event("keydown");
	ev2.keyCode = 13;
	google.maps.event.trigger(this, "keydown", ev1);
	google.maps.event.trigger(this, "keydown", ev2);
}

function recaptchaDone() {
    document.getElementById("submit").disabled = false;
}

function recaptchaExpired() {
    document.getElementById("submit").disabled = true;
}

$(document).ready(function() {
    $(window).keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    $('.cityControlled').on("paste", function(event) {
        event.preventDefault();
    });

    $('#autocomplete').on("focusout", getFirstResult);
	
    $("#fee").on("input", function() {
        var c = this.selectionStart;
        var v = $(this).val();
        var decs = currDecs[curr[country.short_name]];
        if (decs > 0) {
            var r = v.split('.').length > 2 ? /[^\d]$/g : new RegExp(`(?<=\\.${"\\d".repeat(decs)})\\d|[^\\d.]`, 'g');
        } else {
            var r = /[^\d]/g;
        }
        if (r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
    });
});