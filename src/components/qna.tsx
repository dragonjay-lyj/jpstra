const SurveyResultTable = ({ surveyData }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <table className="w-full border-collapse table-fixed text-left">
        <tbody>
          <tr className="bg-blue-500 dark:bg-blue-900 text-white">
            <td colSpan="4" className="py-2 px-4 font-bold">
              回答编号 {surveyData.id}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              昵称
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.handleName}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td width="25%" className="py-2 px-4 font-semibold">
              问题1．年龄
            </td>
            <td width="25%" className="py-2 px-4 font-semibold">
              问题2．性别
            </td>
            <td width="25%" className="py-2 px-4 font-semibold">
              问题3．职业
            </td>
            <td width="25%" className="py-2 px-4 font-semibold">
              问题4．居住地
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td width="25%" className="py-2 px-4">
              {surveyData.age}
            </td>
            <td width="25%" className="py-2 px-4">
              {surveyData.gender}
            </td>
            <td width="25%" className="py-2 px-4">
              {surveyData.occupation}
            </td>
            <td width="25%" className="py-2 px-4">
              {surveyData.residence}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题5．第一次穿褌是几岁？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.firstTightenedAge}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题6．是因为什么活动吗？如果是，请告诉我们是什么活动。
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.eventForFirstTightening}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题7．第一次穿的褌是什么类型？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.firstTypeOfFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题8．第一次穿褌时的感想如何？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              <table className="w-full border-collapse table-fixed">
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td width="50%" className="py-2 px-4 font-semibold">
                      １．关于帅气程度：
                    </td>
                    <td className="py-2 px-4">
                      {surveyData.impression.goodLooks}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td className="py-2 px-4 font-semibold">
                      ２．关于穿着舒适度：
                    </td>
                    <td className="py-2 px-4">
                      {surveyData.impression.comfort}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td className="py-2 px-4 font-semibold">
                      ３．关于穿着的难易度：
                    </td>
                    <td className="py-2 px-4">
                      {surveyData.impression.easeOfTying}
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                    <td className="py-2 px-4 font-semibold">
                      ４．关于羞耻感：
                    </td>
                    <td className="py-2 px-4">
                      {surveyData.impression.shyness}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题9．请告诉我们第一次穿褌时的故事。
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.episodeOfFirstTightening}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题10．褌的穿法是谁教你的？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.learnedFrom}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题11．第一次对褌感兴趣是几岁？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.ageWhenInterestedInFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题12．对褌感兴趣的契机是什么？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.reasonForInterestInFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题13．现在还穿褌吗？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.currentlyTieFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题14．什么情况下会穿褌？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.whenToTieFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题15．请选择所有你穿过的褌类型。
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.typesOfFundoshiTied.join(', ')}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题16．其中你最喜欢哪一种褌？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.favoriteFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题17．平时主要穿什么内裤？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.usualUnderwear}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题18．平时主要穿什么泳裤？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.usualSwimsuit}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题19．家人或伴侣知道你穿褌吗？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.familyAwareness}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题20．穿过六尺褌（前袋型）的朋友，请问你收纳阴茎（小弟弟）的方向是？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.orientationForKokoro}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题21．（女性朋友）目前，据说褌正在悄然流行，你怎么看？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4"></td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题22．（男性朋友）目前，据说女性向的褌正在悄然流行，你怎么看？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.opinionOnFemaleFundoshi}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题23．对从未穿过褌的朋友，你有什么想说的？
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.messageToNonTiers}
            </td>
          </tr>
          <tr className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4 font-semibold">
              问题24．最后，关于褌，请说一句话！
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <td colSpan="4" className="py-2 px-4">
              {surveyData.finalThoughts}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SurveyResultTable;



