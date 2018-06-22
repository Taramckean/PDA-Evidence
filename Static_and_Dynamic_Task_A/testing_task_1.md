### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

#Errors:
#there is a semi-colon out of place in the card.rb file.

class CardGame


  def checkforAce(card)
    if card.value = 1

  #we need to use an evaluator here rather than an assigner, so == instead of =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #it should be 'def highest_card' here not 'dif highest_card'
  if card1.value > card2.value
    return card.name
    #there is no card.name method so we need to interpolate it into a string
  else
    #you need to tell the function to do something with card2 here, so 'return card2' and then also interpolate it
    card2
  end
end
#there are one too many 'end's here, we only need two to make the function complete.
end

def self.cards_total(cards)
  #dont need the method to be 'self.cards_total'
  #'total' needs to be defined here, it's just floating about meaninglessly, need to make it total = 0
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
    #this return needs to be outside the loop
    #this needs to have a space after 'of' and the total needs to be 'to_s to make it a string'
  end
end
#needs another 'end'


```
