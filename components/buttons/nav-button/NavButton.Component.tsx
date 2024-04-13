import React from 'react'
import { StyleSheet, View } from 'react-native'

const NavButton = () => {
  return (
    <div style={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    </div>
  )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: 10,
        right: 10,
    }
});

export default NavButton