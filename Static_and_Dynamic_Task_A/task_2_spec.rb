require('minitest/autorun')
require('minitest/rg')
require_relative('testing_task_2')

class TestCardGame < MiniTest::Test

  def setup()
    @CardGame = CardGame.new
    @card1 = Card.new("Diamonds", 1)
    @card2 = Card.new("Hearts", 10)
    @cards = [@card1, @card2]
  end

  def test_Ace_has_value_1()
    assert_equal(true, @CardGame.checkforAce(@card1))
  end

  def test_highest_card_value()
    assert_equal("10 of Hearts", @CardGame.highest_card(@card1, @card2))
  end

  def test_can_get_card_total()
    assert_equal("You have a total of 11", @CardGame.cards_total(@cards))
  end

end
