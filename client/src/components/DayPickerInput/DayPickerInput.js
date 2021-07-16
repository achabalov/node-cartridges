import React, { } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './DayPickerInput.scss'

export default function MyForm({date, setTimeState})  {

  const handleDayChange= (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    setTimeState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }

    return (
      <div>
        <p>
          {/* {date.isEmpty && 'Пожалуйста, выберите дату сдачи в ремонт'} */}
          {/* {!date.isEmpty && !date.selectedDay && 'This day is invalid'}
          {date.selectedDay && date.isDisabled && 'This day is disabled'} */}
          {/* {date.selectedDay &&
            !date.isDisabled &&
            `You chose ${date.selectedDay.toLocaleDateString()}`} */}
        </p>
        <DayPickerInput
          value={date.selectedDay}
          onDayChange={handleDayChange}
          dayPickerProps={{
            selectedDays: date.selectedDay,
            disabledDays: {
              daysOfWeek: [0, 6],
            },
          }}
        />
      </div>
    );
  }
