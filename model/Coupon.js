const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    type:{
        type:String
    },
    code:{
        type:String
    },
    details:{
        type:String
    },
    discount:{
        type:String
    },
    discount_type:{
        type:String
    },
    start_date:{
        type:String
    },
    end_date:{
        type:String
    },
    created:{
        type: Date,
        default: function() {
            return new Date(Date.now() + (5.5 * 60 * 60 * 1000));
          }
    },
    updated:{
        type: Date,
        default: function() {
            return new Date(Date.now() + (5.5 * 60 * 60 * 1000));
          }
    }
})

const Coupon = mongoose.model('coupon',couponSchema);

module.exports = Coupon;

// [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user'
//   }]
