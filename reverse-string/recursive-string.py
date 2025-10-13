def recursive_string(str):
    if str == "":
        return ""
    
    last_char = str[-1]
    rest = str[:-1]

    return last_char + recursive_string(rest)

result = recursive_string("hello")
print(result)
