/*
* MDAT Query manipulation component
*
* Copyright (c) 2015 MIT Hyperstudio
* Christopher York, 08/2015
*
*/

require('../../css/query.css')

var hg = require('mercury')
var h = require('mercury').h

function Order(initial_order) {
  return hg.varhash(initial_order)
}

Order.render = function(query_state, dim) {
  return (
    h('span.order.' + (query_state.order[dim] || 'nat'), {
      'ev-click' : hg.send(query_state.channels.toggleDimensionOrder, dim)
    })
  )
}

export default Order