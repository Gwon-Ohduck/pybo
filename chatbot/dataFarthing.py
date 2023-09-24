import pickle


def guSearch(search):
    guList = set()
    guSortList = []
    tmp = []
    tmp2 = []

    with open('chatbot/data.p', 'rb') as f:
        data = pickle.load(f)

        for i in data:
            guList.add(i[1][1])

        for gu in guList:
            for rows in data:
                if rows[1][1] == gu:
                    guSortList.append([gu, rows[0], rows[2]])

        
        for i in guSortList:
            if i[0] == search:
                tmp.append(i)
            if i[1].replace(' ', '') == search:
                return i[2]

        for i in tmp:
            d = '업체명 : {} @'.format(i[1], i[2])
            tmp2.append(d)
        response = ''.join(tmp2)

        return response
