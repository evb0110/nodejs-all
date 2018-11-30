constant @dirs = dir().grep(*.d).grep(/\.js/);

for @dirs -> $dir {
  chdir $dir;
  say "=====" ~ $dir;
  shell "git pull";
  chdir '..'.IO;
}
