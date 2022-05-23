import * as React from 'react';
import Slider from 'rc-slider';
import Icon from './Icon';
import { getLocale } from './utils';

const maxValue = 1.7777;

export default function CropViewer(props) {
  const { min, prefixCls, value } = props;
  if (min > maxValue || Math.abs(min - maxValue) < 0.2) {
    return <div className={`${prefixCls}-scaller`}>
      {getLocale('small image', this.props.locale)}
    </div>;
  }
  return (<div className={`${prefixCls}-scaller`}>
      <button disabled={value === min}>
        <Icon type="picture" className="smaller" />
      </button>
      <Slider
        className={`${prefixCls}-slider`}
        value={value}
        min={min}
        max={maxValue}
        step={0.0001}
        onChange={props.onChange}
      />
      <button disabled={value === maxValue}>
        <Icon type="picture" className="larger" />
      </button>
  </div>);
}
