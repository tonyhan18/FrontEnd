using Radzen;
using Microsoft.AspNetCore.Components;

namespace BlazroServerMaster.Components.Services;

/*ModalService 분리 이유 
Modal = 사용자 입력
Dialog = 시스템 설정



📌 문제점 (서비스를 분리하지 않았을 때)

DialogService를 각 컴포넌트에서 직접 호출하면 중복 코드가 많아짐.
모달을 띄우는 방식이 여러 곳에서 변경되면 일일이 수정해야 함.

---------------------------------
🎯 2. 강한 결합(Dependency) 제거 → 유연한 구조
📌 문제점 (Radzen의 DialogService를 직접 사용하면)

DialogService를 사용하려면 모든 컴포넌트에서 inject DialogService 해야 함.
특정 UI 컴포넌트에 DialogService가 직접 포함되면 모달 동작을 변경하기 어려움.

---------------------------------
🎯 3. 모달 UI를 동적으로 변경 가능
📌 문제점 (Radzen DialogService를 직접 사용하면)

모달 디자인을 다르게 적용할 때, 각 컴포넌트에서 직접 스타일을 바꿔야 함.
크기, 버튼 스타일, 애니메이션 등을 일관성 있게 유지하기 어려움.

---------------------------------
🎯 4. 글로벌 모달 관리 가능 (공통 설정 적용)
📌 문제점 (서비스를 분리하지 않았을 때)

모든 모달 창의 설정을 일괄 적용할 방법이 없음.
각 모달에서 별도로 설정해야 하므로 스타일, 애니메이션 일관성이 떨어짐.

---------------------------------
🎯 5. 테스트 및 확장성 증가
📌 문제점 (Radzen의 DialogService를 직접 사용하면)

테스트가 어려움.
DialogService는 UI 관련 코드이므로 별도의 서비스로 분리하지 않으면 유닛 테스트가 어려움.
UI 테스트 없이 ModalService만 별도로 Mocking 해서 테스트할 수 없음.
*/
public class ModalService
{
    private readonly DialogService _dialogService;

    public ModalService(DialogService dialogService)
    {
        _dialogService = dialogService;
    }

    public async Task ShowModal<T>(
        string title, 
        Dictionary<string, object> parameters = null, 
        DialogOptions options = null) where T : ComponentBase
    {
        options ??= new DialogOptions()
        {
            Width = "500px",
            Height = "400px",
            CloseDialogOnOverlayClick = true
        };

        await _dialogService.OpenAsync<T>(title, parameters, options);
    }

    public void CloseModal()
    {
        _dialogService.Close();
    }
}