function centerBall(ball, field) {

    ball.style.top = `${field.clientHeight / 2 - ball.offsetHeight / 2}px`;
    ball.style.left = `${field.clientWidth / 2 - ball.offsetWidth / 2}px`;
}
centerBall(ball, field);