Feature: Amazon Mobile Search
@test
  Scenario: Verify realme mobiles in search results
    Given Visit amazon.in
    When Search for "mobile"
    And Apply realme filter
    Then Realme mobiles in the search results

