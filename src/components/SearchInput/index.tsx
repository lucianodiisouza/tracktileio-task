import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface ISearchProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

const SearchInput = ({ search, setSearch }: ISearchProps) => {
  const [inputValue, setInputValue] = useState(search)

  // adding a small delay between user typing and re-fetching
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearch(inputValue)
    }, 300)

    return () => {
      clearTimeout(debounceTimeout)
    }
  }, [inputValue, setSearch])

  const handleTextChange = (text: string) => {
    setInputValue(text)
  }

  return (
    <TextInput
      style={styles.container}
      placeholder="Search across title and description..."
      value={inputValue}
      onChangeText={handleTextChange}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '96%',
    height: 50,
    marginHorizontal: 5,
    paddingLeft: 8,
    borderRadius: 10,
    marginBottom: 5,
  },
})

export default SearchInput
