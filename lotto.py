import requests
import random
from collections import Counter

# 최근 로또 데이터 가져오기
def get_lotto_numbers(draw_no):
    url = f"https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo={draw_no}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data["returnValue"] == "success":
            return [data[f"drwtNo{i}"] for i in range(1, 7)]
    return None

# 최신 회차 번호 설정
latest_draw_no = 1156

# 최근 당첨 번호 수집
lotto_data = []
for i in range(latest_draw_no, latest_draw_no - 200, -1):
    numbers = get_lotto_numbers(i)
    if numbers:
        lotto_data.extend(numbers)

# 번호 출현 빈도 계산
number_counts = Counter(lotto_data)

# 가장 많이 나온 상위 12개 번호 선택
top_numbers = [num for num, _ in number_counts.most_common(15)]

# 상위 번호 중 6개 랜덤 선택
statistical_lotto_numbers = sorted(random.sample(top_numbers, 6))

# 생성된 통계 기반 로또 번호 출력
print(statistical_lotto_numbers)
