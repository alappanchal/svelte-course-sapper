import { S as SvelteComponentDev, i as init, d as dispatch_dev, K as globals, s as safe_not_equal, v as validate_slots, e as element, m as space, t as text, A as create_component, c as claim_element, a as children, f as detach_dev, n as claim_space, b as claim_text, B as claim_component, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, C as mount_component, l as set_data_dev, D as transition_in, E as transition_out, F as destroy_component } from './client.984ead18.js';
import { B as Button } from './Button.c1988434.js';

/* src\routes\[id].svelte generated by Svelte v3.35.0 */

const { Error: Error_1, console: console_1 } = globals;
const file = "src\\routes\\[id].svelte";

// (87:8) <Button href="mailto:{selectedMeetup.contactEmail}">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Contact");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Contact");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(87:8) <Button href=\\\"mailto:{selectedMeetup.contactEmail}\\\">",
		ctx
	});

	return block;
}

// (88:8) <Button type="button" mode="outline" href="/">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Back");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Back");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(88:8) <Button type=\\\"button\\\" mode=\\\"outline\\\" href=\\\"/\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let h1;
	let t1_value = /*selectedMeetup*/ ctx[0].title + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*selectedMeetup*/ ctx[0].subtitle + "";
	let t3;
	let t4;
	let p;
	let t5_value = /*selectedMeetup*/ ctx[0].description + "";
	let t5;
	let t6;
	let button0;
	let t7;
	let button1;
	let current;

	button0 = new Button({
			props: {
				href: "mailto:" + /*selectedMeetup*/ ctx[0].contactEmail,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button({
			props: {
				type: "button",
				mode: "outline",
				href: "/",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = space();
			p = element("p");
			t5 = text(t5_value);
			t6 = space();
			create_component(button0.$$.fragment);
			t7 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t5 = claim_text(p_nodes, t5_value);
			p_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			claim_component(button0.$$.fragment, div1_nodes);
			t7 = claim_space(div1_nodes);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*selectedMeetup*/ ctx[0].imgURL)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "");
			attr_dev(img, "class", "svelte-11gfc6t");
			add_location(img, file, 80, 8, 2216);
			attr_dev(div0, "class", "image svelte-11gfc6t");
			add_location(div0, file, 79, 4, 2187);
			attr_dev(h1, "class", "svelte-11gfc6t");
			add_location(h1, file, 83, 8, 2309);
			attr_dev(h2, "class", "svelte-11gfc6t");
			add_location(h2, file, 84, 8, 2350);
			attr_dev(p, "class", "svelte-11gfc6t");
			add_location(p, file, 85, 8, 2394);
			attr_dev(div1, "class", "content svelte-11gfc6t");
			add_location(div1, file, 82, 4, 2278);
			attr_dev(section, "class", "svelte-11gfc6t");
			add_location(section, file, 78, 0, 2172);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, img);
			append_dev(section, t0);
			append_dev(section, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, h2);
			append_dev(h2, t3);
			append_dev(div1, t4);
			append_dev(div1, p);
			append_dev(p, t5);
			append_dev(div1, t6);
			mount_component(button0, div1, null);
			append_dev(div1, t7);
			mount_component(button1, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*selectedMeetup*/ 1 && img.src !== (img_src_value = /*selectedMeetup*/ ctx[0].imgURL)) {
				attr_dev(img, "src", img_src_value);
			}

			if ((!current || dirty & /*selectedMeetup*/ 1) && t1_value !== (t1_value = /*selectedMeetup*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t3_value !== (t3_value = /*selectedMeetup*/ ctx[0].subtitle + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t5_value !== (t5_value = /*selectedMeetup*/ ctx[0].description + "")) set_data_dev(t5, t5_value);
			const button0_changes = {};
			if (dirty & /*selectedMeetup*/ 1) button0_changes.href = "mailto:" + /*selectedMeetup*/ ctx[0].contactEmail;

			if (dirty & /*$$scope*/ 2) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 2) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(button0);
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload(page) {
	//console.log (page);
	const meetupID = page.params.id; //page URL params

	return this.fetch("https://svelte-course-20c5e-default-rtdb.firebaseio.com/meetups/" + meetupID + ".json").then(res => {
		if (!res.ok) {
			throw new Error("HTTP Update Favorite Meetup Error");
		}

		return res.json();
	}).then(meetupData => {
		// Object will return to this components into selectedMetup variable using 'export let selectedMeetup' - line 24
		return {
			selectedMeetup: { ...meetupData, id: meetupID }
		};
	}).catch(err => {
		isFavoriteInProgress = false;
		console.log(err);
		this.error(400, "Could not fetch the meetup with id" + meetupID); // Error page (_error.svelte)
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", slots, []);
	let { selectedMeetup } = $$props;
	const writable_props = ["selectedMeetup"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("selectedMeetup" in $$props) $$invalidate(0, selectedMeetup = $$props.selectedMeetup);
	};

	$$self.$capture_state = () => ({ preload, Button, selectedMeetup });

	$$self.$inject_state = $$props => {
		if ("selectedMeetup" in $$props) $$invalidate(0, selectedMeetup = $$props.selectedMeetup);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selectedMeetup];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { selectedMeetup: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*selectedMeetup*/ ctx[0] === undefined && !("selectedMeetup" in props)) {
			console_1.warn("<U5Bidu5D> was created without expected prop 'selectedMeetup'");
		}
	}

	get selectedMeetup() {
		throw new Error_1("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedMeetup(value) {
		throw new Error_1("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS5lNmUwZjNlNC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9baWRdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tXHJcbiAgICAgICAgPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+IFxyXG4gICAgICAgICAgICBUaGUgc2NyaXB0IHJ1bnMgZmlyc3QgYW5kbiBmZXRjaGVzIHRoZSBkYXRhIGZpcnN0XHJcbiAgICAgICAgICAgIEl0IGhvbGRzIG9mIHJlbmRlcmluZyB0aGUgY29tcG9uZW50IHVudGlsIHRoZSBwcm9taXNlIHJldHVybmVkIGJ5IHRoZSBmZXRjaCBpcyByZXNvbHZlZC5cclxuICAgICAgICAgICAgT25jZSB0aGUgcHJvbWlzZSBpcyByZXNvbHZlLCBpdCBzZW5kcyBhbiBvYmplY3QgdG8gdGhlIGNvbXBvbmVudCBhcyBwcm9wIHdoaWNoIGNhbiB0aGVuIGJlIHV0aWxpc2VkIGluIHRoZSBjb21wb25lbnQuXHJcbiAgICAgICAgPC9zY3JpcHQ+XHJcbi0tPlxyXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHBhZ2Upe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cgKHBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IG1lZXR1cElEID0gcGFnZS5wYXJhbXMuaWQ7ICAgIC8vcGFnZSBVUkwgcGFyYW1zXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goJ2h0dHBzOi8vc3ZlbHRlLWNvdXJzZS0yMGM1ZS1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy8nICsgbWVldHVwSUQgKycuanNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoICFyZXMub2sgKXtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQIFVwZGF0ZSBGYXZvcml0ZSBNZWV0dXAgRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLnRoZW4oIG1lZXR1cERhdGEgPT57XHJcbiAgICAgICAgICAgICAgICAvLyBPYmplY3Qgd2lsbCByZXR1cm4gdG8gdGhpcyBjb21wb25lbnRzIGludG8gc2VsZWN0ZWRNZXR1cCB2YXJpYWJsZSB1c2luZyAnZXhwb3J0IGxldCBzZWxlY3RlZE1lZXR1cCcgLSBsaW5lIDI0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBzZWxlY3RlZE1lZXR1cDogey4uLm1lZXR1cERhdGEsIGlkOiBtZWV0dXBJRH19IFxyXG4gICAgICAgICAgICB9KS5jYXRjaCggZXJyID0+e1xyXG4gICAgICAgICAgICAgICAgaXNGYXZvcml0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChlcnIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKDQwMCwgJ0NvdWxkIG5vdCBmZXRjaCB0aGUgbWVldHVwIHdpdGggaWQnICsgbWVldHVwSUQpOyAgLy8gRXJyb3IgcGFnZSAoX2Vycm9yLnN2ZWx0ZSlcclxuICAgICAgICAgICAgfSk7ICAgICAgXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICBpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1VJL0J1dHRvbi5zdmVsdGVcIjsgIFxyXG4gICAgXHJcbiAgICAvL3JlY2VpdmVzIGRhdGEgYXMgcGFnZSBwcm9wIGZyb20gPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+IC4uLiByZXR1cm4geyBzZWxlY3RlZE1lZXR1cDogey4uLm1lZXR1cERhdGEsIGlkOiBtZWV0dXBJRH19IGZyb20gbGluZSAxXHJcbiAgICBleHBvcnQgbGV0IHNlbGVjdGVkTWVldHVwOyBcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICBzZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogIzZiNmI2YjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIntzZWxlY3RlZE1lZXR1cC5pbWdVUkx9XCIgYWx0PVwiXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDE+e3NlbGVjdGVkTWVldHVwLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGgyPntzZWxlY3RlZE1lZXR1cC5zdWJ0aXRsZX08L2gyPlxyXG4gICAgICAgIDxwPntzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPVwibWFpbHRvOntzZWxlY3RlZE1lZXR1cC5jb250YWN0RW1haWx9XCI+Q29udGFjdDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIG1vZGU9XCJvdXRsaW5lXCIgaHJlZj1cIi9cIj5CYWNrPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW1GYSxHQUFjLElBQUMsS0FBSzs7OzttQ0FDcEIsR0FBYyxJQUFDLFFBQVE7Ozs7bUNBQ3hCLEdBQWMsSUFBQyxXQUFXOzs7Ozs7Ozs7O3lDQUNSLEdBQWMsSUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURBTnRDLEdBQWMsSUFBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FBckIsR0FBYyxJQUFDLE1BQU07Ozs7aUdBRzNCLEdBQWMsSUFBQyxLQUFLO2lHQUNwQixHQUFjLElBQUMsUUFBUTtpR0FDeEIsR0FBYyxJQUFDLFdBQVc7OzJGQUNSLEdBQWMsSUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTlFckMsT0FBTyxDQUFDLElBQUk7O09BRWxCLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7O1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsa0VBQWtFLEdBQUcsUUFBUSxHQUFFLE9BQU8sRUFDbkcsSUFBSSxDQUFFLEdBQUc7T0FDQSxHQUFHLENBQUMsRUFBRTthQUNFLEtBQUssQ0FBQyxtQ0FBbUM7OztTQUVoRCxHQUFHLENBQUMsSUFBSTtJQUNoQixJQUFJLENBQUUsVUFBVTs7O0dBRU4sY0FBYyxPQUFNLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUTs7SUFDdEQsS0FBSyxDQUFFLEdBQUc7RUFDVCxvQkFBb0IsR0FBRyxLQUFLO0VBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUUsR0FBRztFQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxvQ0FBb0MsR0FBRyxRQUFROzs7Ozs7O09BVWhFLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
