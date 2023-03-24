import React, {useState, useRef, useEffect, useCallback } from 'react'
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Platform,
  View,
  ViewStyle,
} from 'react-native'

import { AutoScrollingProps } from '../../Props/Organisms'

const AutoScrolling: React.FC<AutoScrollingProps> = ({
    style,
    children,
    endPaddingWidth = 100,
    duration,
    delay=0, 
    isLTR=false
  }:AutoScrollingProps) => {
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState<boolean>(false)
  const [dividerWidth, setDividerWidth] = useState<number>(endPaddingWidth)
  const containerWidth = useRef<number>(0)
  const contentWidth = useRef<number>(0)
  const offsetX = useRef(new Animated.Value(0))
  const contentRef = useRef<any>(null)

  useEffect(() => {
    return () => {
      contentRef.current = null
    }
  }, [])

  const measureContainerView = React.useCallback((
    {nativeEvent: {layout: width}}: LayoutChangeEvent
  ) => {

  }, [])

  
}

export {AutoScrolling}