import { useState } from 'react';
import './Controls.css'

/**
 * 1. 입력값 검증 부족:
 * handleSubmit에서 빈 문자열이나 공백만 입력된 경우를 처리하지 않고 있습니다. 이로 인해 빈 항목이 추가될 수 있습니다.
 * 2. onSubmit 호출 시 에러 가능성:
 * onSubmit이 반드시 전달된다는 가정하에 동작하고 있습니다. onSubmit이 전달되지 않으면 에러가 발생할 수 있습니다. 기본값 설정이나 PropTypes를 사용해 방지할 수 있습니다.
 * 3. select 요소의 접근성 문제:
 * select 요소에 label이 없어서 접근성이 떨어질 수 있습니다. 화면 읽기 도구를 사용하는 사용자에게 불편함을 줄 수 있습니다.
 * 4. 스타일링 의존성:
 * Controls.css에 스타일링이 정의되어 있지만, 컴포넌트가 특정 CSS 파일에 강하게 의존하고 있습니다. 스타일 충돌 가능성을 줄이기 위해 CSS 모듈이나 CSS-in-JS 방식을 고려할 수 있습니다.
 * 5. 상태 관리의 중복:
 * Controls 컴포넌트에서 text 상태를 관리하고 있지만, 상위 컴포넌트(App.jsx)에서도 상태를 관리하고 있습니다. 이로 인해 상태 관리가 중복될 가능성이 있습니다.
 * 6. onChangeFilterType의 에러 가능성:
 * onChangeFilterType이 전달되지 않을 경우, select의 onChange 이벤트에서 에러가 발생할 수 있습니다. PropTypes를 사용해 필수 props를 명시하거나 기본값을 설정해야 합니다.
 * 7. UI/UX 개선 필요:
 * 입력 필드에 placeholder가 없어 사용자가 어떤 내용을 입력해야 하는지 직관적으로 알기 어렵습니다.
 */
function Controls({filterType, onChangeFilterType, onSubmit}) {
    const [text, setText] = useState("");
    const handleChange= (e) => {
        setText(e.target.value);
    };
    // 할일 목록을 추가하고 input값을 초기화하는 함수
    const handleSubmit = () => {
        onSubmit(text);
        setText("");
    };
    return <div className="controls">
        <input type="text" className="input" value={text} onChange={handleChange} />
        <button className="button" onClick={handleSubmit}>추가</button>
        <select className="select" value={filterType} onChange={e=>onChangeFilterType(e.target.value)}>
            <option value="ALL">전체</option>
            <option value="TODO">할 일</option>
            <option value="COMPLETED">완료</option>
        </select>
    </div>
}

export default Controls;