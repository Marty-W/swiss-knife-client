import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { PomoContext } from '../../context/pomoContext'

import Modal from '../UI/Modal'
import Ticker from './Ticker'
import TimePicker from './TimePicker'
import TimerHeading from './TimerHeading'
import TimerButtons from './TimerButtons'

const FocusMode = () => {
  const [state] = useContext(PomoContext)
  const { isRunning, isPaused, isPomo, duration } = state

  return (
    <Modal>
      <FocusWrapper>
        <TimerHeading />
        {isRunning && <Ticker />}
        {!isRunning && <TimePicker />}
        <TimerButtons />
      </FocusWrapper>
      <TickAnimationDiv
        duration={duration.as('seconds')}
        isPaused={isPaused}
        isPomo={isPomo}
      />
    </Modal>
  )
}

const fillAnimation = keyframes`
  from {
    height: 0%
  } to {
    height: 100%
  }

`
const FocusWrapper = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  & > * {
    z-index: 10;
  }
`

const TickAnimationDiv = styled.div`
  background-color: ${(props) =>
    props.isPomo ? props.theme.colors.red : 'green'};
  width: 100%;
  position: absolute;
  bottom: 0;
  animation-name: ${fillAnimation};
  animation-duration: ${(props) => props.duration}s;
  animation-play-state: ${(props) => (props.isPaused ? 'paused' : 'running')};
  animation-timing-function: linear;
`

export default FocusMode
