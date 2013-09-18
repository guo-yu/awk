BEGIN {
  print "Hello from Web/AWK World"
}
$2 ~ /C/ { print $1 * 2 }