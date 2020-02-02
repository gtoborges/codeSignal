function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

  if( (yourLeft + yourRight) !== (friendsLeft + friendsRight) ) return false

  if( (yourLeft !== friendsRight) && (yourLeft !== friendsLeft) ) return false

  if( (yourRight !== friendsRight) && (yourRight !== friendsLeft) ) return false

  return true
}
