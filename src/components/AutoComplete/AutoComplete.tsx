import React from 'react'
import Autosuggest from 'react-autosuggest'

import styles from './styles.module.css'

interface AutoCompleteProps {
  placeholder: string
  suggestions: Suggestion[]
  onSelected: (suggestion: Suggestion) => void
}

class AutoComplete extends React.Component<AutoCompleteProps> {
  state = {
    value: '',
    filteredSuggestions: []
  }

  onChange = (event: React.FormEvent<any>, arg: any) => {
    this.setState({
      value: arg.newValue
    })
  }

  getSuggestions = (value: string) => {
    const { suggestions } = this.props
    const inputValue = value.trim().toLowerCase()

    if (inputValue.length === 0) {
      return []
    }

    return suggestions.filter(suggestion => suggestion.key.toLowerCase().indexOf(inputValue) > -1)
  }

  getSuggestionValue = (suggestion: Suggestion) => suggestion.key

  onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    this.setState({
      filteredSuggestions: this.getSuggestions(value)
    })
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      filteredSuggestions: []
    })
  }

  render() {
    const { value, filteredSuggestions } = this.state
    const { placeholder, onSelected } = this.props

    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={filteredSuggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={(event, { suggestion }) => onSelected && onSelected(suggestion)}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={suggestion => <div>{suggestion.key}</div>}
        inputProps={inputProps}
        theme={{
          container: styles.container,
          containerOpen: 'react-autosuggest__container--open',
          input: 'form-control',
          inputOpen: styles.inputOpen,
          inputFocused: styles.inputFocused,
          suggestionsContainer: styles.suggestionsContainer,
          suggestionsContainerOpen: styles.suggestionsContainerOpen,
          suggestionsList: styles.suggestionsList,
          suggestion: styles.suggestion,
          suggestionFirst: 'react-autosuggest__suggestion--first',
          suggestionHighlighted: styles.suggestionHighlighted,
          sectionContainer: 'react-autosuggest__section-container',
          sectionContainerFirst: 'react-autosuggest__section-container--first',
          sectionTitle: 'react-autosuggest__section-title'
        }}
      />
    )
  }
}

export { AutoComplete }
