import { r as __toESM } from "./rolldown-runtime-CPHnOetI.js";
import { $t as require_prop_types, Qt as BASE_CLASS_PREFIX, a as Icon, en as require_classnames, gt as getDefaultPropsFromGlobalConfig, in as BaseComponent, on as BaseFoundation } from "./es-ncBGSQcY.js";
import React from "react";
//#region node_modules/@douyinfe/semi-foundation/lib/es/spin/constants.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var cssClasses = { PREFIX: `${BASE_CLASS_PREFIX}-spin` };
var strings = { SIZE: [
	"small",
	"middle",
	"large"
] };
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/spin/foundation.js
var SpinFoundation = class SpinFoundation extends BaseFoundation {
	static get spinDefaultAdapter() {
		return {
			getProp: () => void 0,
			setLoading: (val) => void 0
		};
	}
	constructor(adapter) {
		super(Object.assign(Object.assign({}, SpinFoundation.spinDefaultAdapter), adapter));
	}
	updateLoadingIfNeedDelay() {
		const { spinning: propsSpinning, delay: propsDelay } = this._adapter.getProps();
		const { delay } = this._adapter.getStates();
		if (delay) {
			const self = this;
			this._timer = setTimeout(() => {
				self._adapter.setState({
					loading: propsSpinning,
					delay: 0
				});
			}, propsDelay);
		}
	}
	destroy() {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null;
		}
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/spin/index.js
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var prefixCls = cssClasses.PREFIX;
var Spin = class extends BaseComponent {
	constructor(props) {
		super(props);
		this.foundation = new SpinFoundation(this.adapter);
		this.state = {
			delay: props.delay,
			loading: true
		};
	}
	static getDerivedStateFromProps(props) {
		if (!props.delay) return { loading: props.spinning };
		if (props.spinning === false) return {
			delay: 0,
			loading: false
		};
		return { delay: props.delay };
	}
	get adapter() {
		return Object.assign(Object.assign({}, super.adapter), { setLoading: (value) => {
			this.setState({ loading: value });
		} });
	}
	componentWillUnmount() {
		this.foundation.destroy();
	}
	renderSpin() {
		const { indicator, tip } = this.props;
		const { loading } = this.state;
		return loading ? /*#__PURE__*/ React.createElement("div", { className: `${prefixCls}-wrapper` }, indicator ? /*#__PURE__*/ React.createElement("div", {
			className: `${prefixCls}-animate`,
			"x-semi-prop": "indicator"
		}, indicator) : /*#__PURE__*/ React.createElement(Icon, null), tip ? /*#__PURE__*/ React.createElement("div", { "x-semi-prop": "tip" }, tip) : null) : null;
	}
	render() {
		this.foundation.updateLoadingIfNeedDelay();
		const _a = this.props, { children, style, wrapperClassName, childStyle, size } = _a, rest = __rest(_a, [
			"children",
			"style",
			"wrapperClassName",
			"childStyle",
			"size"
		]);
		const { loading } = this.state;
		const spinCls = (0, import_classnames.default)(prefixCls, wrapperClassName, {
			[`${prefixCls}-${size}`]: size,
			[`${prefixCls}-block`]: children,
			[`${prefixCls}-hidden`]: !loading
		});
		return /*#__PURE__*/ React.createElement("div", Object.assign({
			className: spinCls,
			style
		}, this.getDataAttr(rest)), this.renderSpin(), /*#__PURE__*/ React.createElement("div", {
			className: `${prefixCls}-children`,
			style: childStyle,
			"x-semi-prop": "children"
		}, children));
	}
};
Spin.propTypes = {
	size: import_prop_types.default.oneOf(strings.SIZE),
	spinning: import_prop_types.default.bool,
	children: import_prop_types.default.node,
	indicator: import_prop_types.default.node,
	delay: import_prop_types.default.number,
	tip: import_prop_types.default.node,
	wrapperClassName: import_prop_types.default.string,
	childStyle: import_prop_types.default.object,
	style: import_prop_types.default.object
};
Spin.__SemiComponentName__ = "Spin";
Spin.defaultProps = getDefaultPropsFromGlobalConfig(Spin.__SemiComponentName__, {
	size: "middle",
	spinning: true,
	children: null,
	indicator: null,
	delay: 0
});
//#endregion
export { Spin as t };

//# sourceMappingURL=spin-CRMLwPOx.js.map