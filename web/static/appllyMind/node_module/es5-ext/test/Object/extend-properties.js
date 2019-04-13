'use strict';

module.exports = function (t, a) {
	var o, o1, o2, o3, x, y = {}, z = {};
	o = { inherited: true };
	o1 = Object.create(o);
	o1.visible = z;
	o1.nonremovable = 'raz';
	Object.defineProperty(o1, 'hidden', { value: 'hidden' });

	o2 = Object.defineProperties({}, { nonremovable: { value: y }});
	o2.other = 'other';

	o2 = t(o2, o1);

	a(o2.visible, z, "Enumerable");
	a(o1.hidden, 'hidden', "Not Enumerable");
	a(o2.propertyIsEnumerable('visible'), true, "Enumerable is enumerable");
	a(o2.propertyIsEnumerable('hidden'), false,
		"Not enumerable is not enumerable");

	a(o2.hasOwnProperty('inherited'), false, "Extend only own");
	a(o2.inherited, undefined, "Extend ony own: value");

	a(o2.nonremovable, y, "Do not overwrite non configurable");
	a(o2.other, 'other', "Own kept");

	x = {};
	t(x, o2, o1);

	a(x.visible, z, "Enumerable");
	a(x.hidden, 'hidden', "Not Enumerable");
	a(x.propertyIsEnumerable('visible'), true, "Enumerable is enumerable");
	a(x.propertyIsEnumerable('hidden'), false,
		"Not enumerable is not enumerable");

	a(x.hasOwnProperty('inherited'), false, "Extend only own");
	a(x.inherited, undefined, "Extend ony own: value");

	a(x.nonremovable,'raz', "Ignored non configurable");
	a(x.other, 'other', "Other");

	x.visible = 3;
	a(x.visible, 3, "Writable is writable");

	x = {};
	t(x, o1);
	a.throws(function () {
		x.hidden = 3;
	}, "Not writable is not writable");

	x = {};
	t(x, o1);
	delete x.visible;
	a.ok(!x.hasOwnProperty('visible'), "Configurable is configurable");

	x = {};
	t(x, o1);
	a.throws(function () {
		delete x.hidden;
	}, "Not configurable is not configurable");
};
