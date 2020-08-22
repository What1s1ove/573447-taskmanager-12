import { TaskDueDate } from '~/common/types';
import { getFormattedDate } from '~/helpers';
import { DateFormatType } from '~/common/enums';

const createTaskEditDateTemplate = (dueDate: TaskDueDate, isDueDate: boolean) => `
  <button class="card__date-deadline-toggle" type="button">
    date:
    <span class="card__date-status">
      ${isDueDate ? `yes` : `no`}
    </span>
  </button>
  ${isDueDate
  ? `<fieldset class="card__date-deadline">
      <label class="card__input-deadline-wrap">
      <input
        class="card__date"
        type="text"
        placeholder=""
        name="date"
        value="${getFormattedDate(DateFormatType.FULLMONTH_DAY, new Date(dueDate))}"
      />
    </label>
  </fieldset>`
  : ``}
`;

export { createTaskEditDateTemplate };
