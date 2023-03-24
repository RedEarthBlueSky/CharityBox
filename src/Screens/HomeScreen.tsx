import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { HeaderComponent, Stories } from '../Components/organisms'
import AutoScrolling from '../Components/organisms/AutoScrolling'
import { styles, aStyles } from '../Styles'
import { USERS } from './../Data/storiesOrgData'

const HomeScreen:React.FC = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderComponent />
      <Stories />
      <AutoScrolling 
        style={scrollStyles.scrolling2}
        duration={3500}
      > 
      <View style={styles.rowFlexContainer}>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAhgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xAA6EAACAQMCAwYEBAUCBwAAAAABAgMABBESIQUxQQYTIlFhcRQyQoEjkaHBB1Kx4fAzYhUkcpLC0fH/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAjEQACAgICAgMAAwAAAAAAAAAAAQIRAxIhMQRBEyJRMmFx/9oADAMBAAIRAxEAPwCv9z6UPc+lSfw/pQ/DHyqqjCMEB8qHuPSpQW58qH4b0raPEV3HpRhAfKpT4ahFv6V6jxF9xTa9ubWwCm7mWPUdgdz+VJ9puOLwzTBZmKS5ORICc93t/WqDIzyMWd2djzZjk0qeSnSCUbLfN2k4eiv3QlkYfKNGkH7mk07T2ZUF4Jw3UDBx+tVHGPtRwKX8kjdUW1u01ltoinbffIAx+tKR9obOSdUVJAh+phVO0b0ZQQcivfLI9ojRbWa3u89xIHI5gUuIc9KoFjfz2kqOkjDQeWdsdauHC+0cV1K3xSJBEq7sT1/zP6U2GVPsxwrokO59KHuPSpKGNJY1kjOpW3BxR/hvSnagWRfceldUr8P6V1e1PDnuPShEHpUj3ND3NbRpHdx6UYW/pUh3NGEVbRgwFv6VH8dvE4Pwua8ZdTLsin6mPIVYe6qk/wAU5NHDrG35Bpi538lx/wCVDk+sWzYq2ZtcSNPLJNI2p3Ysx8yTmkDinsNq82WRWKdSN8e+N6Qe2lVyNB9PWoGx6ixEb+9CBQ91IDpKMD6jFLvazQrqZG2xnKkYz70OyN0Y3OccqOm4pRV2yRt19K4oVbbrvXjKA0g+9OLGY21zG7llwwyV56euKIEIwwpXZ0AP2xXjaNc4NLZ8QsVmsNRhBK+JcEHrT74f0rPv4f8AGU4fxFrS7mZLefwgE+FX6H08vyrVO56V0cM94k846sjfh/SuqT7mhptAiGKR+Ig1le9TUOmoVU5O0tvLJcyX87xW0R0LApwzGqieKvFdzzWcGYznwSsW28/epJZ4xHxwto18EHcEEeYNGArKbHtReLcQrYoyEn8SNTkN7A8q0rhFxc3Nms92gjLclIwcU3HlU+gZ43Dsf4rM/wCJLfFcSiQZIjcQrv6An89Q/wC2tOHLNZb2rb4ntdbWajCwyFmY/U2dyfsorPIf0Bx9gnh9tHpKwqrAY1KMGkZoEcFWAYHmCKlZwpY45U2aMHcVycjdnTxJIaW9mBspwvIqRkGnQ4apUojAKRvGfEv2HMfYinFsgzin6QrkMTvSG2PqJS+J8AubRzLbxtJCf5d9Pp/eo7uQIQQwIGxHVR0+3rWoxxhzgYqM452VtJ4RcQAQzZ3Cjwt9v3FOhl/SaeJejPOXLYEbZo6oAwGdyKG7haCVo3DYBI3/AFpJST4s7in2TjiNjBcxypjUjBhkbZG9b7AwkiR1OQygg+9Yhwjhs3GeJQ2VtgPI25PJVwSSftW6RQrFEkaZ0ooUZO+1WeJfInNXAGK6lMV1WCTzshge0ZpZStxq2BUnI96I6tE5QMDtnI6087QcUteIzw9xZC10DSQDzFRaOVbAG3UnrXGnFdI6UW6JK1UGRXD6MfMwO+PSrqzXd+IbeGKUrEikPFNkMOWWFZ4ZDqzsvnjlWr9muJ2HD+BWjXMsCalAZ4xt96d467VgZ26XBZ7VStugJ1EDGayzjhNp2uvpZH8RDupZshQWwP0rUbS7t7uIS2sySpnmpzWfdouFd52jvmnwUaBQMDpn/wCVT5H8FRNiTcisXHEZVYtDxDvP9soG/wCVK8M43LNP3NyFBPykdaYSWMtndKZLdZkXYeTe+1KWFizziUqE8Qwo5VzXT4LU5Inb3iZsoDKqk+VRI4/xG43adIIz1071ZZuHJPYIGG51HNVLjXDHt5/wwxBHIdKVBxfDHT27RPcMvtciv/xeVnHTbFXC2vBcwBW06/NeRrPLW3W8gigtLB0kUeOZjge+Ku/Zzg/w6gmdicfVQyX4eXXJW+2ViUk+IXYE/wBj+361WFGFwOfStC7U2pns5U6gZH2qiQQvKylEJIOP7U3HL6ickPsaN/Cizkji4hdTRspl7tFJGMgaiSPzq/1nv8O3lh4nLb4mSKS319252DA8x061oVdXxZXiIc8dZg11BXVQKPMs8z3DBpMFgMZxRdTbb0U7NhG1ChOx3O9chnQscB8Jj6j0q38MtuFXXZo3MkqxXUOzo7eFwPSqTv8AMaEyfyk+tbB6voyVv2aT2Uuo7G6ke1u0jt5mB7hgdK/epDtJKw4nHNldE9uMYPkTn9vzrMrdr2CY27JOHcBgi8zjcfarlFxSW87O29reWc0c0Tgx3BXZh13/AM5U5y2xuIEeJpicy94dwMUrFCqgMwA9KRZ9IB6miw3cMLFbsFdw2vpXPXBe1dUW2GBWslUb6U3qGu7ZS2GUE07n4zaLHFHHBcMHGBImCtMbeWYMRcDIJ2NKYxDiyUrsMAVOW0xtoy2fERj7VExYG+PypV5WcBf0obDaTE+ISGY4zzqnh34NxX8DxorDIPLHkaucyhI9Tcqj7HhEV/ctoiR5XbK53Pv6Cixt3SEzS7LB2QUXF6t3GGVFiYEY2GSMD9DVwzVe7LRXNrHNb3UDxMreIHBXPmp8iMf5tU7mu74uNwxJM5Wee82xTNdRNVdVAk8wk4964g4yaEuXOTiud9WASNvKuSWWBk4oo50tbzG3lEiqjnlh1yKUurg3140rRpG0hGyDCitSBdk52V4k0PEIJ5LgGSF8Ksvysp2OT0rVL63t5+zV0LTSUZTKAjagCDqIFZzwThMItJVsVlvLtyulhEe7x1U5rV7FAlnHHNbJBqTDRoBj15VXiVxaEz7szRXQJlyABtk0JvOH6tEs8bDBGwyDSnFrE2V7NZXA1qp8OfqXofyqDvYoBJ4YEz5KuK50402mdHE7plh4LfWMUfctcIu+wIwKlJp7IR6jcQlfPWKplotuTpeBR5EirJa2dl3GlYY2Y/VpqaVFVEhGyLFqByuMg0FsdZLnqdvQUkSGCwJy+r2pc6YgNwMUs1vgjO2U7R8KSNCfxHA28hv+1MuzPC7yW4RLoXdmUJBmTIPPrnpUf2qvGu+KwW8Tqnc4xqOxZv8A0KC+7Q8Tt79JWvkuXEYGw8PsRV/jxUY2yDM3KTSL3DxmXgfEza8SuZJ7YoNEr41A1a7W8gu4+8tpVkTzB5Vhdzxqa6laeRV74nZx9PpRrTjV5aalt7iWMOckI2N6rXk6v+hLwKS47N4znlXVjVpxziQTvrq/nEL7Ie95mhpq8lP0LeB/pR85oDmh5V2MjNSGvk4bb06tLa4uifhoHfT8xVchfempp5a8Su7W2e3t53jikOXCnGr717g1X0i48I41cdm+GjuLyG4nzhYDkhV88jlT3hf8QrqW+VuKNFFaqu6Rrkt96ocU+kYx4dXLypXiMKRpHPCMRSLg+jUz5JKqB1vss/Gu0Q4rxX45NXw2BGqEbqB1/PJ+9PEeCWMMMGqPZTkRlMjc9TTtLm5g/wBPJTyyCKnyJy5KcUki+2NvAQDhTmnxWCJMjAPQCs+g49dR/Lj2OaO3F727fS0mkeS1LLHIpWVFslv4LfUNQZ23IFBa95eSB5jiPPL0quQGOEGSRWJG+QCSakEvJ7iLu4UaOM7FgPEfbyodGFtZA8fhLT/G5z8RJJz/ANpA/piovBOx2wNqmO1DBZLWBVKrFGTgHPM/2qFwwHPnVauhE2k3QKhsHAo8bgEZ5etJoXKkjeiMzK2H5HoK3sXtQvIWz4Tke9dT2ERTqCV0qAPzrqXvRvZCF/SgDECu2rj+lUErsDJNCM0+Ths5AOnRkZGtsZ+3OjNw25UkEIds7SA1p5f6NoDnUp5Gn9lm5t5rJjkldcf/AFDpTNUMeQw3roZmgnjlT5kbIrX0evkSh296dBzjGj8qPeQhbpmj/wBOTxp7HeiCInlS2xsYuugef0NT/g9mt7crAm0j5055H70yETjk2KdW8lwhBWdhjlhzQsYk16J+xt+I2coHw5VFP83OlpL6O6mkRo0geJtJGcg1CtxeaMaJbuTWOjMaWsLySVG0yMcsT4TzNC1wei+aoT7S20aQwTxP4tRU/cZ/aohBqHiwam7uznvYJFLam+ZQT1qvxvjamY+gMqp3VDjul04AK+qmkngGlQD4gdyaUD7UBajcUxezCmRoz9Q+1dXZI+Uke1DQfGgt2MYljOrWSNtsU7Fxa26/8vGzzfzNgj+tLpY267Nqc+ppwkcSfIij2FFskasEn7I+ecyPqllaQGkxOwJEbYHlint5aLKC6DS/T1qJ3ViDkEHcUSlYmeNwdMkDeyyIVmfWD/N0psQoYkcjSbFdsUGD0betAH8Mq9wqO2Sp29qcxxxuuRz881D94/KjiTflQOCY+Gdx7RLNDp8/vQptjFRayN0kZfZq7v5lOTI5HodqH4xq8lfhMzQxXcDKyjvAp0HO+aLwT8P8QHJzy8qjDxCdCNLb9DXRX80QOnSCTk5FZo6o8s8LsusEytvjB61W+0PDzbzm6hGYZD4gPpNI2vG5FJ71Aw/2bVJLxK2u4WjMg0uMFTtQpOLsbLJDLGrK/HJmlVy7BVGTSdzbmCcqhBRj4SN6UbMcWlTgn5j+1OvgjfDpi3fRwDCjO+7Dqa6m+gsoQeEjffrXUGrCtH//2Q=='}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,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'}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
            style={aStyles.storyItemImage} 
            source={{uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAhgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xAA6EAACAQMCAwYEBAUCBwAAAAABAgMABBESIQUxQQYTIlFhcRQyQoEjkaHBB1Kx4fAzYhUkcpLC0fH/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBBQD/xAAjEQACAgICAgMAAwAAAAAAAAAAAQIRAxIhMQRBEyJRMmFx/9oADAMBAAIRAxEAPwCv9z6UPc+lSfw/pQ/DHyqqjCMEB8qHuPSpQW58qH4b0raPEV3HpRhAfKpT4ahFv6V6jxF9xTa9ubWwCm7mWPUdgdz+VJ9puOLwzTBZmKS5ORICc93t/WqDIzyMWd2djzZjk0qeSnSCUbLfN2k4eiv3QlkYfKNGkH7mk07T2ZUF4Jw3UDBx+tVHGPtRwKX8kjdUW1u01ltoinbffIAx+tKR9obOSdUVJAh+phVO0b0ZQQcivfLI9ojRbWa3u89xIHI5gUuIc9KoFjfz2kqOkjDQeWdsdauHC+0cV1K3xSJBEq7sT1/zP6U2GVPsxwrokO59KHuPSpKGNJY1kjOpW3BxR/hvSnagWRfceldUr8P6V1e1PDnuPShEHpUj3ND3NbRpHdx6UYW/pUh3NGEVbRgwFv6VH8dvE4Pwua8ZdTLsin6mPIVYe6qk/wAU5NHDrG35Bpi538lx/wCVDk+sWzYq2ZtcSNPLJNI2p3Ysx8yTmkDinsNq82WRWKdSN8e+N6Qe2lVyNB9PWoGx6ixEb+9CBQ91IDpKMD6jFLvazQrqZG2xnKkYz70OyN0Y3OccqOm4pRV2yRt19K4oVbbrvXjKA0g+9OLGY21zG7llwwyV56euKIEIwwpXZ0AP2xXjaNc4NLZ8QsVmsNRhBK+JcEHrT74f0rPv4f8AGU4fxFrS7mZLefwgE+FX6H08vyrVO56V0cM94k846sjfh/SuqT7mhptAiGKR+Ig1le9TUOmoVU5O0tvLJcyX87xW0R0LApwzGqieKvFdzzWcGYznwSsW28/epJZ4xHxwto18EHcEEeYNGArKbHtReLcQrYoyEn8SNTkN7A8q0rhFxc3Nms92gjLclIwcU3HlU+gZ43Dsf4rM/wCJLfFcSiQZIjcQrv6An89Q/wC2tOHLNZb2rb4ntdbWajCwyFmY/U2dyfsorPIf0Bx9gnh9tHpKwqrAY1KMGkZoEcFWAYHmCKlZwpY45U2aMHcVycjdnTxJIaW9mBspwvIqRkGnQ4apUojAKRvGfEv2HMfYinFsgzin6QrkMTvSG2PqJS+J8AubRzLbxtJCf5d9Pp/eo7uQIQQwIGxHVR0+3rWoxxhzgYqM452VtJ4RcQAQzZ3Cjwt9v3FOhl/SaeJejPOXLYEbZo6oAwGdyKG7haCVo3DYBI3/AFpJST4s7in2TjiNjBcxypjUjBhkbZG9b7AwkiR1OQygg+9Yhwjhs3GeJQ2VtgPI25PJVwSSftW6RQrFEkaZ0ooUZO+1WeJfInNXAGK6lMV1WCTzshge0ZpZStxq2BUnI96I6tE5QMDtnI6087QcUteIzw9xZC10DSQDzFRaOVbAG3UnrXGnFdI6UW6JK1UGRXD6MfMwO+PSrqzXd+IbeGKUrEikPFNkMOWWFZ4ZDqzsvnjlWr9muJ2HD+BWjXMsCalAZ4xt96d467VgZ26XBZ7VStugJ1EDGayzjhNp2uvpZH8RDupZshQWwP0rUbS7t7uIS2sySpnmpzWfdouFd52jvmnwUaBQMDpn/wCVT5H8FRNiTcisXHEZVYtDxDvP9soG/wCVK8M43LNP3NyFBPykdaYSWMtndKZLdZkXYeTe+1KWFizziUqE8Qwo5VzXT4LU5Inb3iZsoDKqk+VRI4/xG43adIIz1071ZZuHJPYIGG51HNVLjXDHt5/wwxBHIdKVBxfDHT27RPcMvtciv/xeVnHTbFXC2vBcwBW06/NeRrPLW3W8gigtLB0kUeOZjge+Ku/Zzg/w6gmdicfVQyX4eXXJW+2ViUk+IXYE/wBj+361WFGFwOfStC7U2pns5U6gZH2qiQQvKylEJIOP7U3HL6ickPsaN/Cizkji4hdTRspl7tFJGMgaiSPzq/1nv8O3lh4nLb4mSKS319252DA8x061oVdXxZXiIc8dZg11BXVQKPMs8z3DBpMFgMZxRdTbb0U7NhG1ChOx3O9chnQscB8Jj6j0q38MtuFXXZo3MkqxXUOzo7eFwPSqTv8AMaEyfyk+tbB6voyVv2aT2Uuo7G6ke1u0jt5mB7hgdK/epDtJKw4nHNldE9uMYPkTn9vzrMrdr2CY27JOHcBgi8zjcfarlFxSW87O29reWc0c0Tgx3BXZh13/AM5U5y2xuIEeJpicy94dwMUrFCqgMwA9KRZ9IB6miw3cMLFbsFdw2vpXPXBe1dUW2GBWslUb6U3qGu7ZS2GUE07n4zaLHFHHBcMHGBImCtMbeWYMRcDIJ2NKYxDiyUrsMAVOW0xtoy2fERj7VExYG+PypV5WcBf0obDaTE+ISGY4zzqnh34NxX8DxorDIPLHkaucyhI9Tcqj7HhEV/ctoiR5XbK53Pv6Cixt3SEzS7LB2QUXF6t3GGVFiYEY2GSMD9DVwzVe7LRXNrHNb3UDxMreIHBXPmp8iMf5tU7mu74uNwxJM5Wee82xTNdRNVdVAk8wk4964g4yaEuXOTiud9WASNvKuSWWBk4oo50tbzG3lEiqjnlh1yKUurg3140rRpG0hGyDCitSBdk52V4k0PEIJ5LgGSF8Ksvysp2OT0rVL63t5+zV0LTSUZTKAjagCDqIFZzwThMItJVsVlvLtyulhEe7x1U5rV7FAlnHHNbJBqTDRoBj15VXiVxaEz7szRXQJlyABtk0JvOH6tEs8bDBGwyDSnFrE2V7NZXA1qp8OfqXofyqDvYoBJ4YEz5KuK50402mdHE7plh4LfWMUfctcIu+wIwKlJp7IR6jcQlfPWKplotuTpeBR5EirJa2dl3GlYY2Y/VpqaVFVEhGyLFqByuMg0FsdZLnqdvQUkSGCwJy+r2pc6YgNwMUs1vgjO2U7R8KSNCfxHA28hv+1MuzPC7yW4RLoXdmUJBmTIPPrnpUf2qvGu+KwW8Tqnc4xqOxZv8A0KC+7Q8Tt79JWvkuXEYGw8PsRV/jxUY2yDM3KTSL3DxmXgfEza8SuZJ7YoNEr41A1a7W8gu4+8tpVkTzB5Vhdzxqa6laeRV74nZx9PpRrTjV5aalt7iWMOckI2N6rXk6v+hLwKS47N4znlXVjVpxziQTvrq/nEL7Ie95mhpq8lP0LeB/pR85oDmh5V2MjNSGvk4bb06tLa4uifhoHfT8xVchfempp5a8Su7W2e3t53jikOXCnGr717g1X0i48I41cdm+GjuLyG4nzhYDkhV88jlT3hf8QrqW+VuKNFFaqu6Rrkt96ocU+kYx4dXLypXiMKRpHPCMRSLg+jUz5JKqB1vss/Gu0Q4rxX45NXw2BGqEbqB1/PJ+9PEeCWMMMGqPZTkRlMjc9TTtLm5g/wBPJTyyCKnyJy5KcUki+2NvAQDhTmnxWCJMjAPQCs+g49dR/Lj2OaO3F727fS0mkeS1LLHIpWVFslv4LfUNQZ23IFBa95eSB5jiPPL0quQGOEGSRWJG+QCSakEvJ7iLu4UaOM7FgPEfbyodGFtZA8fhLT/G5z8RJJz/ANpA/piovBOx2wNqmO1DBZLWBVKrFGTgHPM/2qFwwHPnVauhE2k3QKhsHAo8bgEZ5etJoXKkjeiMzK2H5HoK3sXtQvIWz4Tke9dT2ERTqCV0qAPzrqXvRvZCF/SgDECu2rj+lUErsDJNCM0+Ths5AOnRkZGtsZ+3OjNw25UkEIds7SA1p5f6NoDnUp5Gn9lm5t5rJjkldcf/AFDpTNUMeQw3roZmgnjlT5kbIrX0evkSh296dBzjGj8qPeQhbpmj/wBOTxp7HeiCInlS2xsYuugef0NT/g9mt7crAm0j5055H70yETjk2KdW8lwhBWdhjlhzQsYk16J+xt+I2coHw5VFP83OlpL6O6mkRo0geJtJGcg1CtxeaMaJbuTWOjMaWsLySVG0yMcsT4TzNC1wei+aoT7S20aQwTxP4tRU/cZ/aohBqHiwam7uznvYJFLam+ZQT1qvxvjamY+gMqp3VDjul04AK+qmkngGlQD4gdyaUD7UBajcUxezCmRoz9Q+1dXZI+Uke1DQfGgt2MYljOrWSNtsU7Fxa26/8vGzzfzNgj+tLpY267Nqc+ppwkcSfIij2FFskasEn7I+ecyPqllaQGkxOwJEbYHlint5aLKC6DS/T1qJ3ViDkEHcUSlYmeNwdMkDeyyIVmfWD/N0psQoYkcjSbFdsUGD0betAH8Mq9wqO2Sp29qcxxxuuRz881D94/KjiTflQOCY+Gdx7RLNDp8/vQptjFRayN0kZfZq7v5lOTI5HodqH4xq8lfhMzQxXcDKyjvAp0HO+aLwT8P8QHJzy8qjDxCdCNLb9DXRX80QOnSCTk5FZo6o8s8LsusEytvjB61W+0PDzbzm6hGYZD4gPpNI2vG5FJ71Aw/2bVJLxK2u4WjMg0uMFTtQpOLsbLJDLGrK/HJmlVy7BVGTSdzbmCcqhBRj4SN6UbMcWlTgn5j+1OvgjfDpi3fRwDCjO+7Dqa6m+gsoQeEjffrXUGrCtH//2Q=='}}
          />
          <Text style={aStyles.storyItemText}>
            Hello World!
          </Text>
        </TouchableOpacity>
      </View>        
      </AutoScrolling >
      <Text style={styles.H1}>Home Screen</Text>
    </SafeAreaView>
  )
}

export { HomeScreen }

const scrollStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
  scrolling1: {
    marginVertical: 10,
  },
  scrolling2: {
    backgroundColor: "red",
    alignItems: "center",
    marginHorizontal: 0,
    marginVertical: 20,
  },
  welcome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    margin: 20,
    backgroundColor: "blue",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});