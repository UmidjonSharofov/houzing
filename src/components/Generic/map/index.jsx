/* eslint-disable react/prop-types */

import { YMaps, Map } from "react-yandex-maps";

const MpStyle = {
    position: 'relative',
    left: 0,
    top: 0,
    height: '50vh',
    overflow: 'hidden',
}

const Yandex = ({Center}) => (
    <YMaps>
        <Map style={MpStyle} defaultState={{ center: Center||[41.2579002380, 69.2811965942], zoom: 10 }} />
    </YMaps>
);

export default Yandex
