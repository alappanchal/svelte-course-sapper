import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, R as empty, j as insert_dev, M as group_outros, E as transition_out, N as check_outros, D as transition_in, f as detach_dev, p as bubble, y as create_slot, e as element, c as claim_element, a as children, g as attr_dev, h as add_location, r as listen_dev, u as prop_dev, G as update_slot, o as noop } from './client.5c5b3382.js';

/* src\components\UI\Button.svelte generated by Svelte v3.35.0 */

const file = "src\\components\\UI\\Button.svelte";

// (91:0) {:else}
function create_else_block(ctx) {
	let button;
	let current_block_type_index;
	let if_block;
	let button_class_value;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1, create_else_block_1];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*loadingIcon*/ ctx[5]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			button = element("button");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true, type: true, disabled: true });
			var button_nodes = children(button);
			if_block.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", button_class_value = "" + (/*mode*/ ctx[2] + " " + /*color*/ ctx[3] + " svelte-drewlc"));
			attr_dev(button, "type", /*type*/ ctx[0]);
			button.disabled = /*disabled*/ ctx[4];
			add_location(button, file, 95, 2, 1695);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			if_blocks[current_block_type_index].m(button, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[8], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(button, null);
			}

			if (!current || dirty & /*mode, color*/ 12 && button_class_value !== (button_class_value = "" + (/*mode*/ ctx[2] + " " + /*color*/ ctx[3] + " svelte-drewlc"))) {
				attr_dev(button, "class", button_class_value);
			}

			if (!current || dirty & /*type*/ 1) {
				attr_dev(button, "type", /*type*/ ctx[0]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				prop_dev(button, "disabled", /*disabled*/ ctx[4]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(91:0) {:else}",
		ctx
	});

	return block;
}

// (89:0) {#if href}
function create_if_block(ctx) {
	let a;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", /*href*/ ctx[1]);
			attr_dev(a, "class", "svelte-drewlc");
			add_location(a, file, 89, 2, 1501);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			if (!current || dirty & /*href*/ 2) {
				attr_dev(a, "href", /*href*/ ctx[1]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(89:0) {#if href}",
		ctx
	});

	return block;
}

// (99:4) {:else}
function create_else_block_1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(99:4) {:else}",
		ctx
	});

	return block;
}

// (97:4) {#if loadingIcon}
function create_if_block_1(ctx) {
	let i;

	const block = {
		c: function create() {
			i = element("i");
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "fa fa-refresh fa-spin");
			add_location(i, file, 97, 6, 1784);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(i);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(97:4) {#if loadingIcon}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*href*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Button", slots, ['default']);
	let { type = "button" } = $$props;
	let { href = null } = $$props;
	let { mode = null } = $$props;
	let { color = null } = $$props;
	let { disabled = false } = $$props;
	let { loadingIcon = false } = $$props;
	const writable_props = ["type", "href", "mode", "color", "disabled", "loadingIcon"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
	});

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("href" in $$props) $$invalidate(1, href = $$props.href);
		if ("mode" in $$props) $$invalidate(2, mode = $$props.mode);
		if ("color" in $$props) $$invalidate(3, color = $$props.color);
		if ("disabled" in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ("loadingIcon" in $$props) $$invalidate(5, loadingIcon = $$props.loadingIcon);
		if ("$$scope" in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		type,
		href,
		mode,
		color,
		disabled,
		loadingIcon
	});

	$$self.$inject_state = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("href" in $$props) $$invalidate(1, href = $$props.href);
		if ("mode" in $$props) $$invalidate(2, mode = $$props.mode);
		if ("color" in $$props) $$invalidate(3, color = $$props.color);
		if ("disabled" in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ("loadingIcon" in $$props) $$invalidate(5, loadingIcon = $$props.loadingIcon);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [type, href, mode, color, disabled, loadingIcon, $$scope, slots, click_handler];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			type: 0,
			href: 1,
			mode: 2,
			color: 3,
			disabled: 4,
			loadingIcon: 5
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment.name
		});
	}

	get type() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get mode() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mode(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get loadingIcon() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set loadingIcon(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Button as B };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmMzZWExMTkyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgbGV0IHR5cGUgPSBcImJ1dHRvblwiOyAgICBcclxuICAgIGV4cG9ydCBsZXQgaHJlZiA9IG51bGw7XHJcbiAgICBleHBvcnQgbGV0IG1vZGUgPSBudWxsO1xyXG4gICAgZXhwb3J0IGxldCBjb2xvciA9IG51bGw7XHJcbiAgICBleHBvcnQgbGV0IGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBleHBvcnQgbGV0IGxvYWRpbmdJY29uID0gZmFsc2U7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5idXR0b24sYSB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2YwMDU2O1xyXG4gIGJhY2tncm91bmQ6ICNjZjAwNTY7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcixcclxuYnV0dG9uOmFjdGl2ZSxcclxuYTpob3ZlcixcclxuYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNlNDA3NjM7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTQwNzYzO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IHJnYmEoNzcsIDUxLCA1MSwgMC4yNik7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCxcclxuYnV0dG9uOmRpc2FibGVkOmhvdmVyLFxyXG5idXR0b246ZGlzYWJsZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxuICBjb2xvcjogIzk1OTU5NTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiAjMDFhMTI5O1xyXG4gIGJvcmRlci1jb2xvcjogIzAxYTEyOTtcclxufVxyXG5cclxuLnN1Y2Nlc3M6aG92ZXIsXHJcbi5zdWNjZXNzOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzFhYzc0NTtcclxuICBib3JkZXItY29sb3I6ICMxYWM3NDU7XHJcbn1cclxuXHJcbi5vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2NmMDA1NjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ub3V0bGluZTpob3ZlcixcclxuLm91dGxpbmU6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZjN2RlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vdXRsaW5lOmRpc2FibGVkLFxyXG4ub3V0bGluZTpkaXNhYmxlZDpob3ZlcixcclxuLm91dGxpbmU6ZGlzYWJsZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG5cclxuLm91dGxpbmUuc3VjY2VzcyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDFhMTI5O1xyXG4gIGNvbG9yOiAjMDFhMTI5O1xyXG59XHJcblxyXG4ub3V0bGluZS5zdWNjZXNzOmhvdmVyLFxyXG4ub3V0bGluZS5zdWNjZXNzOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2MyZmZkMTtcclxufVxyXG5cclxuPC9zdHlsZT5cclxuXHJcbnsjaWYgaHJlZn1cclxuICA8YSBocmVmPVwie2hyZWZ9XCI+PHNsb3QgLz48L2E+XHJcbns6ZWxzZX1cclxuICA8IS0tXHJcbiAgICAgIG9uOmNsaWNrIC0gZm9yd2FyZHMgdGhlIGJ1dHRvbidzIGNsaWNrIGV2ZW50IHRvIHRoZSBjb21wb25lbnQgd2hlcmUgaXQgaXMgYmVpbmcgdXNlZC5cclxuICAgICAgSW4gdGhpcyBjYXNlLCBpdHMgTWVldHVwSXRlbS5TdmVsdGUuXHJcbiAgLS0+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cInttb2RlfSB7Y29sb3J9XCIge3R5cGV9IG9uOmNsaWNrIHtkaXNhYmxlZH0+XHJcbiAgICB7I2lmIGxvYWRpbmdJY29ufVxyXG4gICAgICA8aSBjbGFzcz1cImZhIGZhLXJlZnJlc2ggZmEtc3BpblwiPjwvaT5cclxuICAgIHs6ZWxzZX1cclxuICAgICAgPHNsb3QgLz5cclxuICAgIHsvaWZ9XHJcbiAgPC9idXR0b24+XHJcbnsvaWZ9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQWdHUyxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBREYsR0FBSSxzQkFBRyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkdBQVosR0FBSSxzQkFBRyxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQU5sQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQURYLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdkZNLElBQUksR0FBRyxRQUFRO09BQ2YsSUFBSSxHQUFHLElBQUk7T0FDWCxJQUFJLEdBQUcsSUFBSTtPQUNYLEtBQUssR0FBRyxJQUFJO09BQ1osUUFBUSxHQUFHLEtBQUs7T0FDaEIsV0FBVyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=