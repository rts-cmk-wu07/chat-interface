/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export default function Message({text, user, thisIs}) {
	const isMe = thisIs === user
	
	const styles = {
		container: css`
				display: flex;
				flex-direction: row${isMe ? "-reverse" : null};
		`,
		bubble: css`
				border-radius: 50%;
				height: 30px;
				width: 30px;
				background-color: goldenrod;
			`,
		text: css`
				background-color: lightblue;
				padding: .5em 1em;
				border-radius: 7px;
				border-bottom-left-radius: 0;
		`
	}
	return (<div css={styles.container}>
		<div css={styles.bubble}></div>
		<div css={styles.text}>{text}</div>
	</div>)
}