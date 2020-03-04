'use strict';

const Pharmacy = {
  home: {
    handler: function(request, h) {
      return h.view('home', { title: 'Find pharmacy' });
    }
  },
  pharmacy: {
    handler: function(request, h) {
      return h.view('pharmacy', {
        title: 'Pharmacy POI',
        pharmacy: this.pharmacy
      });
    }
  },
  newPharmacy: {
    handler: function(request, h) {
      const data = request.payload;
      this.pharmacy.push(data);
      return h.redirect('/pharmacy');
    }
  }
};

module.exports = Pharmacy;
