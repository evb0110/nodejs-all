use JSON::Fast;

my %a = 
  name => 'John',
  age => 25;

%a<pets><cow> = 'Dolly';
%a<pets><cat> = 'Molly';

say to-json %a;
