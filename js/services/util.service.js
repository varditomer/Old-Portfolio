'use strict'

function getDate(timestamps) {
    var a = new Date(timestamps * 1000)
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var year = a.getFullYear()
    var month = months[a.getMonth()]
    var date = a.getDate()
    return (date + ' ' + month + ' ' + year)
}