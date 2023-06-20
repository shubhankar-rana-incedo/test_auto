Feature: Amazon Mobile Search
  Scenario: Verify realme mobiles in search results
    Given Visit amazon.in
    When Search for {string}
    And Apply realme filter
    Then Realme mobiles in the search results
