using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_4.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Assignment { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Quiz { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Group_Project { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "The value must be between 0 and 100.")]
        public float Intex { get; set; }
       
    }
}
